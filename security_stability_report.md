# Security & Stability Deep-Dive Audit (Unity MelonLoader C#/Rust Bridge)

## Executive Conclusion

**Overall risk level: MEDIUM (stability-heavy, not malware-heavy).**

The audited codebase implements a runtime bridge between:
- **C# (MelonLoader + Harmony in Unity IL2CPP)** and
- **native Rust DLL modules** loaded at runtime via FFI.

Primary findings:
- No direct evidence of classic malware behavior (no runtime shell/process execution, no registry persistence logic, no base-game binary patching-on-disk in runtime code paths).
- The largest practical risk is **save-state handling during multiplayer join/sync**, where existing save files can be temporarily overwritten and restored via backup logic.
- The largest technical security weakness is **plaintext relay transport (`ws://`)** that permits on-path interception/manipulation.
- FFI memory handling includes basic defensive checks, but native-module boundaries remain crash-sensitive by design.

---

## 1) COMPREHENSIVE COMPONENT BREAKDOWN

### 1.1 High-level architecture and purpose

This project is a **mod runtime framework** for Data Center:

- **C# side (`csharp/DataCenterModLoader/`)**
  - Boots as a MelonLoader mod (`Core.cs`)
  - Applies Harmony patches into game methods
  - Loads and hosts native Rust mods (`FFIBridge.cs`)
  - Exposes game APIs to Rust (`GameAPI.cs`)
  - Handles multiplayer relay/session/save workflows (`MultiplayerBridge.cs`)
  - Maintains mod configs and custom content integration

- **Rust side (`crates/`)**
  - `dc_api`: shared API contracts and utility abstractions
  - `dc_multiplayer`: networking/session/save-sync logic, FFI exports consumed by C#
  - `dc_netwatch`: example gameplay mod (SysAdmin automation) using the API
  - `dc_relay_proto`: packet/protocol codec layer

**Actual purpose of the code:**  
Enable feature-rich game modding with native Rust extensions and optional multiplayer state synchronization, while preserving single-player gameplay hooks.

---

### 1.2 C# runtime flow (MelonLoader / Unity side)

#### `Core.cs`
- Entry point (`MelonMod`) initializes:
  - Crash/file logging in game root (`dc_modloader_debug.log`)
  - `Mods/native` directory
  - Harmony patches (`HarmonyInstance.PatchAll`)
  - ModConfig system
  - FFI bridge for Rust mod loading
- Runs periodic update pipelines and shutdown cleanup.

#### `FFIBridge.cs` (generic Rust mod host)
- Enumerates `Mods/native/*.dll`.
- Uses Win32 dynamic loading APIs:
  - `LoadLibrary`, `GetProcAddress`, `FreeLibrary`
- Resolves exports:
  - Required/optional (`mod_info`, `mod_init`, `mod_update`, `mod_fixed_update`, `mod_on_scene_loaded`, `mod_shutdown`, `mod_on_event`)
- Marshals C# strings to native pointers and frees allocated memory (`StringToHGlobalAnsi` / `FreeHGlobal`).
- Isolates per-mod callback failures with try/catch logging to reduce hard-fail cascades.

#### `HarmonyPatches.cs` + `GameHooks.cs`
- Extensive game method interception, mostly **Postfix** notification style.
- A few **Prefix** patches can suppress original behavior in specific conditions:
  - `HRSystem.ButtonConfirmHire`
  - `HRSystem.ButtonConfirmFireEmployee`
- Includes high-frequency hook on `TimeController.Update`, so performance and exception resilience matter.

#### `MultiplayerBridge.cs` (C# ↔ Rust multiplayer bridge)
- Resolves `dc_multiplayer` exports from loaded module handle.
- Calls Rust FFI functions for:
  - room/session state
  - save transfer status/data
  - join/load transitions
- Contains logic for:
  - save discovery (`SaveSystem.saveDirPath`, fallback to `Application.persistentDataPath`)
  - writing synchronized save payloads to disk
  - backup (`.mp_backup`) and cleanup/restore (`CleanupMpSaveFiles`)
  - deferred `SaveSystem.Load(...)` workflows after scene transitions.

#### `ModConfigSystem.cs` + `CustomEmployeeManager.cs`
- Persists mod config JSON under:
  - `MelonEnvironment.UserDataDirectory/ModConfigs`
- Supports custom employee registration and mod asset management.

---

### 1.3 Rust runtime flow (native side)

#### `dc_multiplayer`
- Core shared state in `state.rs`:
  - global `OnceLock<Mutex<MultiplayerState>>`
  - default relay URL constant (`ws://192.99.16.77:9943`)
  - session/save/carry/world sub-states

#### Network loop (`net.rs`)
- Establishes WebSocket connection using `tungstenite`.
- Spawns dedicated I/O thread (`thread::spawn`).
- Uses channels (`mpsc`) to pass packets/events between game thread and network thread.
- Handles heartbeat and disconnection state transitions.

#### Save FFI (`ffi/save.rs`)
- Exposes C-callable functions consumed by C#:
  - `mp_send_save_data`, `mp_get_save_data`, `mp_has_pending_save`, etc.
- Uses pointer checks and bounded copies:
  - null/length validation
  - `copy_nonoverlapping` with `min(data.len(), max_len)`

#### Session FFI (`ffi/session.rs`)
- Host/connect/disconnect and join-state export surface.
- Converts C pointers into Rust slices/strings with explicit length handling.

#### `dc_netwatch`
- Example automation mod; deploys portrait image into:
  - `<game>/UserData/ModAssets`
- Demonstrates gameplay automation and config-driven behavior, not system persistence.

---

### 1.4 Cross-language logic trace (C# ↔ Rust)

1. C# runtime starts (`Core`), applies Harmony, loads native DLLs (`FFIBridge`).
2. C# obtains function pointers from `dc_multiplayer` (`MultiplayerBridge.TryInitialize`).
3. During host/join:
   - C# requests/receives save data via Rust FFI.
   - C# writes save payload to disk and invokes `SaveSystem.Load(...)`.
4. Rust network thread receives relay messages, updates shared state, and surfaces events via FFI polling.
5. C# periodic update loop consumes FFI state and drives Unity/game-side actions.

This creates a **hybrid runtime** where Unity logic remains C#-driven, while relay/session/save transport is Rust-driven.

---

## 2. POST-UNINSTALLATION DAMAGE ("LINGERING DAMAGE" REPORT)

### 2.1 Savegame corruption and post-uninstall crash risk

### Observed behavior
- Multiplayer join/save-sync flow can:
  - write `_mp_sync.*` temporary files,
  - overwrite an existing save file with synchronized bytes,
  - create backup as `original.save.mp_backup`,
  - attempt restoration during cleanup.

### Risk mechanism after uninstall
- If the mod crashes or is force-terminated between overwrite and cleanup, the original save may remain replaced.
- After uninstall, vanilla game loads whatever remains on disk:
  - If replaced save is valid but unexpected: gameplay inconsistency.
  - If structurally incompatible/corrupt: load failure or crash is possible.

### Important nuance
- The code does **not** show explicit custom field injection into game-native serializers from this audit path.
- The main risk is **raw file replacement timing**, not guaranteed schema poisoning.

**Assessment:** lingering damage risk is **real and moderate**, bounded to save data integrity/recovery behavior.

---

### 2.2 Permanent asset modification of base game files

### Checked concern
Whether runtime code overwrites:
- `globalgamemanagers`
- Unity `.assets`
- original game assemblies/DLLs

### Findings
- No runtime evidence found of writing these base game files.
- Harmony patching is in-memory/runtime interception.
- File writes observed are in:
  - game root log file
  - `UserData` config/assets
  - save directories (including `persistentDataPath` fallback)

**Assessment:** no confirmed permanent base-asset tampering in audited runtime paths.

---

### 2.3 Orphaned configuration / registry / environment persistence

### Findings
- Mod config JSON persists in `UserData/ModConfigs`.
- Optional mod assets persist in `UserData/ModAssets`.
- No runtime code evidence of:
  - Windows registry writes for persistence,
  - environment variable mutation for persistence,
  - startup task/service creation.

### Post-uninstall behavior
- Leftover config/assets may remain on disk and become stale/orphaned.
- These are typically non-fatal unless external tooling or another mod expects specific schema.

**Assessment:** lingering artifacts exist, but persistence is mainly file-level and user-removable.

---

## 3. ADDITIONAL SEVERE RISKS

### 3.1 Hidden malicious behavior (exfiltration / RCE)

### Exfiltration
- Network traffic exists and is expected for multiplayer relay.
- No hidden telemetry/webhook pipeline identified in audited runtime files.

### Runtime code execution abuse
- No direct runtime hits for:
  - `System.Diagnostics.Process.Start`
  - `std::process::Command`
- Setup scripts under `tools/` are install-time utilities, not in-game runtime behavior.

**Assessment:** no direct malware signature found in audited runtime paths.

---

### 3.2 Transport and trust risks

- Default relay URL uses **unencrypted `ws://`**.
- Risks:
  - message sniffing,
  - message tampering,
  - replay/injection potential depending on server/client validation.

**Severity:** high from a network-security standpoint, even without local malware intent.

---

### 3.3 FFI/system-level vulnerability surface

- Native DLL loading from `Mods/native` implies trust in every loaded module.
- Rust FFI methods include baseline pointer/size guards, but:
  - malformed third-party native modules can still crash process,
  - ABI mismatch or contract drift can destabilize game runtime.
- Global mutexed state lowers data-race risk but may still encounter lock contention or logic races under high churn.

**Assessment:** persistent OS compromise is not directly evidenced, but crash/availability risk is intrinsic to mixed managed/native mod ecosystems.

---

## Conclusive Risk Assessment

### Final rating: **MEDIUM**

### Why not LOW
- Save overwrite/restore timing can leave broken saves after uninstall.
- Plaintext relay transport (`ws://`) creates avoidable security exposure.
- Native FFI boundaries are inherently crash-prone with untrusted modules.

### Why not HIGH
- No direct evidence of intentional malware behavior in runtime code.
- No confirmed permanent modification of core game binaries/assets.
- No confirmed registry/environment persistence abuse in runtime logic.

---

## Recommended Hardening Actions (Priority Ordered)

1. **Eliminate save overwrite fragility**
   - Use atomic temp-write + atomic rename where possible.
   - Add crash-resilient journal/marker and startup recovery routine.
   - Provide explicit "restore original save" command on next launch.

2. **Upgrade transport security**
   - Move relay to `wss://` with strict certificate validation.
   - Add optional payload authentication (MAC/signature) to game messages.

3. **Strengthen FFI contracts**
   - Version and validate FFI ABI at startup.
   - Enforce explicit max buffer sizes and return-code semantics.
   - Isolate third-party native mod failures where feasible.

4. **Reduce uninstall residue**
   - Add optional cleanup routine for `_mp_*`, `.mp_backup`, and orphan mod artifacts.
   - Document manual cleanup paths clearly for end users.

5. **Operational safeguards**
   - Add integrity checks/logging around save write/restore lifecycle.
   - Monitor lock durations and event-queue latency in multiplayer hot paths.
