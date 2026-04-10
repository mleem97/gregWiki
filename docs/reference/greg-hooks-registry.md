---
id: greg-hooks-registry
title: greg.* hooks registry (IL2CPP)
slug: /reference/greg-hooks-registry
description: greg_hooks.json, Harmony hook sources under gregCore, regeneration from Il2Cpp unpack, and overlap with Rust bridge patches.
---

# greg.* hooks registry (IL2CPP)

This page documents the **canonical C# / MelonLoader hook surface** for *Data Center* IL2CPP interop: stable string ids, JSON registry, generated Harmony patches, and how they coexist with the existing Rust FFI bridge.

## Canonical hook ids

Runtime identifiers follow:

```text
greg.<DOMAIN>.<Action>
```

- **`greg`** — fixed prefix (never `FMF`, `FFM`, or product-specific spellings in new APIs).
- **`<DOMAIN>`** — uppercase segment from `GregDomain` (`PLAYER`, `EMPLOYEE`, `NETWORK`, `UI`, `SYSTEM`, …). Same logical areas as the framework domain model; see `GregHookName` in **gregFramework** sources.
- **`<Action>`** — `PascalCase` verb or noun phrase (`MoneyChanged`, `Hired`, `ComponentInitialized`, …).

Always build ids with `GregHookName.Create(GregDomain.*, "Action")` in mods — do not concatenate raw strings.

## Registry file: `greg_hooks.json`

| Location | Role |
|----------|------|
| **Repo root** `greg_hooks.json` | Source of truth checked into **gregFramework**; documents every emitted hook (`name`, `patchTarget`, `strategy`, `payloadSchema`, optional `legacy`). |
| **Next to `FrikaModdingFramework.dll`** (build output) | Copy via `FrikaMF.csproj` (`gregCore/framework/gregFramework/greg_hooks.json`) so `GregCompatBridge` can resolve legacy ids at runtime. |

The file is **generated**; edit the generator or whitelist (see below), then re-run the script — do not hand-edit hundreds of entries unless you are fixing metadata only.

## Code layout (gregFramework repo)

| Path | Purpose |
|------|---------|
| `gregCore/Core/` | `GregDomain`, `GregHookName`, `GregEventDispatcher`, `GregCompatBridge`, `GregPayload` |
| `gregCore/Hooks/` | `GregPlayerHooks`, `GregEmployeeHooks`, … — Harmony postfix patches compiled into the MelonLoader plugin |
| `gregCore/scripts/Generate-GregHooksFromIl2CppDump.ps1` | Regenerates `greg_hooks.json` and all `Greg*Hooks.cs` files |

The main plugin project (`gregCore/framework/FrikaMF.csproj`) references `..\Core\**\*.cs` and `..\Hooks\**\*.cs`. Harmony discovers any type in that assembly marked with `[HarmonyPatch]` (see `Core.ApplyHarmonyPatchesWithDiagnostics`).

## Regeneration pipeline

1. **Source of truth for patchable signatures** — Il2CppInterop C# under `gregReferences/il2cpp-unpack/Assembly-CSharp/Il2Cpp/*.cs` (stand-in when a single-file `MergedCode.md` dump is not in the repo).
2. Run from repo root (PowerShell):

   ```powershell
   pwsh -NoProfile -File gregCore/scripts/Generate-GregHooksFromIl2CppDump.ps1
   ```

3. Rebuild **FrikaMF** so hooks and copied JSON match.

### Generator behaviour (summary)

- Emits **postfix** Harmony stubs with `GregEventDispatcher.Emit` and try/catch around each emit.
- Skips high-frequency Unity loops (`Update`, `FixedUpdate`, `LateUpdate`, `OnUpdate`), coroutine `IEnumerator` entrypoints, property accessors, and obvious IL2CPP noise (`codegen`, `MethodInternalStatic`, …).
- Skips **ECS-heavy** signatures unless Unity.Entities (and related) references are added to the project (`Entity`, `EntityCommandBuffer`, `SystemState`, `BlobArray`, …).
- Skips additional interop-only types where the project lacks references (e.g. some `Unity.InputSystem`, UI event types) — extend `Test-SkipInteropSignature` or add references when you need those patches.
- **Overload policy:** only the **first** overload per `Type|MethodName` per file is emitted (Harmony `nameof` ambiguity otherwise).
- **Whitelist (`gameHookClasses`)** — keeps the **FrikaMF** build green without pulling the entire game surface into scope; expand the list in the script when you add assembly references for more types.
- **Harmony exclusion set** — parses `gregCore/framework/FrikaMF/HarmonyPatches.cs` for `HarmonyPatch(typeof(...), nameof(...))` / string method names so **Rust bridge patches are not duplicated** by generated `Greg*Hooks` (e.g. `Player.UpdateCoin` stays owned by the hand-written patch that already forwards to `GregEventDispatcher`).

## Mod author entry points

- [Greg hooks showcase](/wiki/guides/mod-developers/greg-hooks-showcase) — subscribe to `greg.*`, use `GregPayload`, optional cancelable flows where the bridge exposes them.
- [FMF hook naming](/wiki/reference/fmf-hook-naming) — older **`FMF.*` / `FFM.*`** string catalog and domain policy for *documentation* constants; runtime IL2CPP Harmony surface is **`greg.*`** as above.
- [FMF hooks catalog](/wiki/reference/fmf-hooks-catalog) — generated table from legacy `HookNames` / `EventIds` sources (distinct from `greg_hooks.json`).

## Legacy hook ids

`GregCompatBridge` loads optional `legacy` → `name` mappings from `greg_hooks.json` next to the assembly. Populate `legacy` only when you intentionally support old spellings; keep new public API strictly on **`greg.*`**.

## See also

- [FFI, hooks & Lua](/wiki/topics/ffi-and-hooks/overview)
- [Framework architecture](/wiki/framework/architecture)
- [Reference & technical hub](/wiki/topics/reference/overview)
