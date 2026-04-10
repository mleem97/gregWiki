---
title: Greg hooks & event runtime
sidebar_label: Greg hooks & events
description: greg.* hooks, GregEventDispatcher, GregNativeEventHooks, greg_hooks.json, Rust FFI event ids, and compat aliases.
---

# Greg hooks & event runtime

The **`FrikaModdingFramework.dll`** assembly is built from **`gregCore/framework/FrikaMF.csproj`** and combines Harmony patches, C# events (`GregEventDispatcher`), and the Rust/native bridge. Mod authors mainly care about **three surfaces**:

| Surface | Role | Typical entry |
|---------|------|----------------|
| **`greg.*` hook strings** | Canonical names for Harmony/mod code; registry in **`greg_hooks.json`**. | `GregEventDispatcher.On("greg....", handler, modId)` in **`gregFramework.Core`** |
| **Native pipeline (`EventIds` → `greg.*`)** | Same gameplay moments as FFI events; centralized in **`GregNativeEventHooks`**. | Constants / `Resolve(uint)` on **`gregFramework.Core.GregNativeEventHooks`** |
| **Legacy aliases** | Old spellings → canonical **`greg.*`**. | **`GregCompatBridge`** (+ optional **`legacy`** entries in **`greg_hooks.json`**) |

New **documentation** identifiers still follow **`FMF.<Domain>.*`** — see [FMF hook naming](/wiki/reference/fmf-hook-naming). **Runtime** strings for the native chain are **`greg.*`** as defined by **`GregNativeEventHooks`** and **`greg_hooks.json`**.

## `greg_hooks.json` (version 2)

| Path | Role |
|------|------|
| **Repo root** `greg_hooks.json` | Source of truth: `name`, `patchTarget`, `strategy`, `payloadSchema`, optional `legacy`. |
| **Next to `FrikaModdingFramework.dll`** | Copied from the monorepo root on build so **`GregCompatBridge`** can resolve legacy names. |

Regenerate: `gregCore/scripts/Generate-GregHooksFromIl2CppDump.ps1` when Il2Cpp/interop inputs change.

## `GregEventDispatcher` / SDK

Implementation: **`gregCore/framework/src/Sdk/GregEventDispatcher.cs`** (`namespace gregFramework.Core`). API: **`On` / `Once` / `Off` / `Emit`**, **`OnCancelable` / `InvokeCancelable`**, **`UnregisterAll(modId)`**.

Build stable hook strings with **`GregHookName.Create(GregDomain.*, "Action")`** or **`GregNativeEventHooks.*`** constants.

## Native events (`EventIds`)

- **`EventIds` and `EventDispatcher`:** `gregCore/framework/src/ModLoader/EventDispatcher.cs` (numeric ids aligned with Rust).
- **Mapping → `greg.*`:** **`GregNativeEventHooks`** (`gregCore/framework/src/Sdk/GregNativeEventHooks.cs`); emission via **`GregHookIntegration`** in the same ModLoader tree.
- **Wiki table:** [greg hooks catalog](/wiki/reference/greg-hooks-catalog) (generator: `gregCore/tools/Generate-GregHookCatalog.ps1`).

## Rust FFI

Rust/native mods receive **numeric** event ids; C# mirrors the same moments as **`greg.*`** through **`GregHookIntegration`** while the game runs (including when the FFI connection is down for the managed **`greg.*` surface). Bridge code: **`FfiBridge` / `FFIBridge`** under `framework/src/ModLoader/`.

## MelonLoader entry points (one DLL)

Depending on the build, multiple **`MelonMod`** types may ship in the same assembly (e.g. main framework plugin vs. AssetExporter paths) — check **`MelonInfo`** / **`MelonGame`** in source.

## Tooling

- **MCP:** `greg_hook_registry`, `greg_hook_search`, … with `dataRoot` → **`gregCore/`** — [MCP server](/wiki/reference/mcp-server).
- **[FMF hooks catalog](/wiki/reference/fmf-hooks-catalog)** is now a **short redirect** to **`GregNativeEventHooks`** / [greg hooks catalog](/wiki/reference/greg-hooks-catalog) (the old **`HookNames.cs`** table is gone).

## See also

- [Repository architecture](/wiki/framework/architecture)
- [FFI, hooks & Lua (hub)](/wiki/topics/ffi-and-hooks/overview)
- [Getting started](/wiki/getting-started)
