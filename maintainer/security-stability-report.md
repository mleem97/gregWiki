Title: Security & Stability Audit
Path: /maintainer/security-stability-report
Type: Internal / Advanced
Audience: maintainer, framework developer, admin/operator
Summary: Comprehensive security and stability deep-dive audit of the gregFramework C#/Rust bridge and runtime.
Suggested Tags: security, audit, stability, ffi, research
Related Pages: /maintainer/unity6-stability, /advanced/persistence
Split Recommendation: Keep as one page

# Security & Stability Deep-Dive Audit

## Executive Conclusion

**Overall risk level: MEDIUM (stability-heavy, not malware-heavy).**

The audited codebase implements a runtime bridge between **C# (MelonLoader + Harmony in Unity IL2CPP)** and **native Rust DLL modules** loaded at runtime via FFI.

### Primary Findings
- **No Malware Evidence**: No direct evidence of classic malware behavior (no runtime shell/process execution, no registry persistence logic, no base-game binary patching-on-disk).
- **Save-State Risks**: The largest practical risk is **save-state handling during multiplayer join/sync**, where existing save files can be temporarily overwritten and restored via backup logic.
- **Transport Weakness**: The largest technical security weakness is **plaintext relay transport (`ws://`)**, which permits on-path interception or manipulation.
- **FFI Stability**: FFI memory handling includes basic defensive checks, but native-module boundaries remain crash-sensitive by design.

---

## 1. Comprehensive Component Breakdown

### 1.1 Architecture Overview
The **gregFramework** is a hybrid runtime:
- **C# Side (`gregCore`)**: Handles MelonLoader/Harmony initialization, mod loading, and high-level game hooks.
- **Rust Side (`crates/`)**: Manages multiplayer session state, FFI contracts, and performance-critical codecs.

### 1.2 C# Runtime Flow
- **`Core.cs`**: Entry point for Harmony patches and service orchestration.
- **`FFIBridge.cs`**: Uses Win32 `LoadLibrary` to host native Rust mods from `Mods/native/*.dll`.
- **`MultiplayerBridge.cs`**: Manages the interface with `dc_multiplayer` for session and save data synchronization.

### 1.3 Rust Runtime Flow
- **`dc_multiplayer`**: Maintains shared global state and handles WebSocket communication via `tungstenite`.
- **FFI Surface**: Exposes C-callable functions for save data and session management with bounded memory copies.

---

## 2. Post-Uninstallation Analysis ("Lingering Damage")

### 2.1 Savegame Corruption
Multiplayer synchronization involves writing temporary `_mp_sync.*` files and creating `.mp_backup` files. If the mod crashes during this process, original saves may remain replaced or orphaned.

### 2.2 Base Game Integrity
No evidence was found of runtime modification to base Unity assets (`.assets`, `globalgamemanagers`) or core game assemblies.

### 2.3 Residual Artifacts
Mod configuration JSON and assets persist in the `UserData/` directory after uninstallation. No registry or environment persistence was detected.

---

## 3. Risk Assessment & Hardening

### 3.1 Network Security
The use of **unencrypted `ws://`** for the default relay is a significant exposure. It is highly recommended to upgrade to **`wss://`** with strict certificate validation.

### 3.2 FFI Reliability
ABI mismatch or contract drift can destabilize the game runtime. Future updates should include versioned FFI contracts and improved isolation for third-party native modules.

### Final Rating: MEDIUM
- **Why not LOW**: Save overwrite fragility and plaintext transport risks.
- **Why not HIGH**: No intentional malware or permanent system-level tampering detected.

---

## Recommended Hardening Actions

1. **Atomic Save Operations**: Use atomic temp-write and rename for save synchronization to prevent corruption during crashes.
2. **Upgrade to WSS**: Move all relay communication to encrypted WebSockets.
3. **ABI Versioning**: Enforce strict versioning for FFI contracts between C# and Rust layers.
4. **Cleanup Utility**: Provide an optional uninstallation tool to remove residual `_mp_*` and `UserData/` artifacts.
