---
title: Greg hooks & event runtime
sidebar_label: Greg hooks & events
description: greg.* hook registry, GregEventDispatcher, Rust FFI event ids, and how they relate to legacy FFM strings.
---

# Greg hooks & event runtime

The **FrikaModdingFramework** assembly (`gregCore/FrikaMF.csproj`, output **`FrikaModdingFramework.dll`**) combines Harmony patches, C# mod events, and the Rust/native bridge. Mod and plugin authors should understand **three related surfaces**:

| Surface | Purpose | Typical entry |
|--------|---------|----------------|
| **`greg.*` string hooks** | Canonical hook names for new work; registry drives codegen and docs. | `GregEventDispatcher.On("greg....", handler, modId)` in **`gregFramework.Core`** |
| **Legacy `FFM.*` strings** | Numeric Rust/game pipeline still resolves through **`HookNames`** constants today. | [`FrikaMF/HookNames.cs`](https://github.com/mleem97/gregFramework/blob/main/gregCore/FrikaMF/HookNames.cs), [`EventIds.cs`](https://github.com/mleem97/gregFramework/blob/main/gregCore/FrikaMF/EventIds.cs) |
| **In-process mod messages** | Cross-mod C# notifications (not the same as `greg.*`). | `AssetExporter.ModFramework` / **`ModFramework.Events`** |

Naming policy for **new** public identifiers remains **`FMF.<Domain>.*`** — see [FMF hook naming](/wiki/reference/fmf-hook-naming). The **`greg.*`** registry is generated from the Il2Cpp unpack and is the **runtime source of truth** for Harmony bridge patches in **`gregFramework.Hooks`** (auto-generated types under `gregCore/Hooks/`).

## `greg_hooks.json` (version 2)

- **Repo paths:** `gregCore/gregFramework/greg_hooks.json` (and a mirrored copy under `gregCore/framework/gregFramework/` for some builds).
- **Meaning:** canonical list of `greg.<DOMAIN>.<Action>` hooks with patch targets, strategies, and payload hints.
- **Regenerate:** `gregCore/scripts/Generate-GregHooksFromIl2CppDump.ps1` when `gregReferences/` Il2Cpp unpack or merged interop changes.
- **Runtime compat:** **`GregCompatBridge`** (`gregFramework.Core`) can load **`greg_hooks.json`** next to the framework DLL to map legacy spellings.

## `GregEventDispatcher`

Implemented in **`gregCore/Core/GregEventDispatcher.cs`** (`namespace gregFramework.Core`). Use **`On` / `Once` / `Off` / `Emit`** (and cancelable overloads where exposed) for string-keyed hooks with optional **`modId`** for diagnostics.

## Rust FFI and numeric events

Rust mods receive **numeric** event ids; C# maps them via **`EventDispatcher`** / **`GregHookIntegration`** in the **`FrikaMF`** tree so that game and bridge traffic can still surface as **`greg.*`** where integrated. Standalone bridge documentation: `gregCore/bridges/gregSta.RustBridge/README.md`.

## MelonLoader entry points (same DLL)

Two **`MelonMod`** types ship in one assembly for different scenarios (check `MelonInfo` / `MelonGame` attributes in source):

- **`DataCenterModLoader.Core`** — primary Data Center + Rust load path (`FrikaMF/Core.cs`).
- **`AssetExporter.Main`** — broader tooling / dev entry (`Main.cs`), also participates in framework bootstrap paths.

Exact responsibilities evolve in **`gregCore`**; treat this split as **“two hosts, one framework DLL”** when debugging load order.

## Tooling & assistants

- **MCP:** `greg_hook_registry`, `greg_hook_search`, `greg_hook_stats` read **`greg_hooks.json`** when `dataRoot` points at **`gregCore/`** — see [MCP server](/wiki/reference/mcp-server).
- **Legacy catalog page:** [FMF hooks catalog](/wiki/reference/fmf-hooks-catalog) is generated from **`FrikaMF/HookNames.cs`** and **`FrikaMF/EventIds.cs`** (`tools/Generate-FmfHookCatalog.ps1`).
- **Declarative doc stub:** [FMF Hook Reference](/wiki/framework/fmf-hooks) (from `fmf_hooks.json` / scanner, may lag core).

## See also

- [Repository architecture](/wiki/framework/architecture)
- [FFI, hooks & Lua (hub)](/wiki/topics/ffi-and-hooks/overview)
- [Getting started](/wiki/getting-started)
