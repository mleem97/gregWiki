---
title: Getting started
sidebar_label: Getting started
description: Workspace layout (gregFramework), building gregCore, hooks, and your first mod.
---

The workspace is **multi-repo**: several Git checkouts live **side by side** under a common `gregFramework/` folder. **Logical stack:** **ModManager → Framework / SDK → Plugins → Mods** — see [System architecture & documentation principles](/wiki/meta/system-architecture-principles).

| Folder | Role |
|--------|--------|
| **`gregCore/`** | Framework: **`gregCore/FrikaMF.sln`**, main project **`gregCore/framework/FrikaMF.csproj`**; SDK under `framework/src/Sdk/`; MCP under `gregCore/mcp-server/` |
| **`gregMod.<Name>/`** | Gameplay mods (often `FMF.*` assemblies), **flat** next to `gregCore/` (umbrella **`gregMods/`** is deprecated) |
| **`gregExt.<Name>/`** | Framework plugins (`FFM.Plugin.*` / `greg.Plugin.*`), also flat (**`gregExtensions/`** deprecated) |
| **`gregModmanager/`** | GregModManager / Workshop UI (`WorkshopUploader.csproj`) |
| **`gregDataCenterExporter/`** | Exporter, templates, mirrors |
| **`gregWiki/`** | This documentation site (Docusaurus) |

Rust/native mods are loaded through the core FFI layer; bridge code lives under **`gregCore/framework/src/ModLoader/`**.

## Build the framework

```bash
dotnet build gregCore/FrikaMF.sln -c Release
```

Or open **`gregCore/FrikaMF.sln`** in your IDE. For CI without a local game install, many projects support **`-p:CI=true`** (see each `.csproj`).

**Prerequisites:** MelonLoader **net6** assemblies and game Il2Cpp interop — either from `{Game}/MelonLoader/` or **`gregCore/lib/references/MelonLoader`** (e.g. `python gregCore/tools/refresh_refs.py`). Set **`DATA_CENTER_GAME_DIR`** if MSBuild should discover the game path.

## Hooks and registries

| Topic | Where |
|-------|--------|
| **Canonical `greg.*` (JSON, Il2Cpp)** | Repo root **`greg_hooks.json`**; regenerate: **`gregCore/scripts/Generate-GregHooksFromIl2CppDump.ps1`** |
| **EventId → `greg.*` (native / FFI pipeline)** | **`GregNativeEventHooks`** — [greg hooks catalog](/wiki/reference/greg-hooks-catalog), source `gregCore/framework/src/Sdk/GregNativeEventHooks.cs` |
| **`FMF.*` documentation naming** | [FMF hook naming](/wiki/reference/fmf-hook-naming) |
| **Architecture** | [Greg hooks & event runtime](/wiki/framework/greg-hooks-and-events) |
| **Legacy spellings** | **`GregCompatBridge`** loads **`greg_hooks.json`** next to **`FrikaModdingFramework.dll`** |

## Start a new mod

1. Create **`gregMod.<Name>/`** under `gregFramework/` (or clone a template).
2. Add **`ProjectReference`** to **`gregCore/framework/FrikaMF.csproj`** (see **`mods/GregShowcaseMod/`**).
3. Use **`gregFramework.Core`** (`GregEventDispatcher`, `GregHookName`, `GregNativeEventHooks`, …).
4. Templates: **`gregCore/Templates/greg.BasedModTemplate/`** or mirrored templates under **`gregDataCenterExporter/Templates/`**.

Reference mod: **`mods/GregShowcaseMod/`** — [Greg hooks showcase](/wiki/guides/mod-developers/greg-hooks-showcase).

## Documentation site (`gregWiki/`)

- Markdown under **`gregWiki/docs/`**
- Docker: from **`gregWiki/`** root — see **`gregWiki/README.md`**
- MCP: [mcp-server](/wiki/reference/mcp-server) — server code under **`gregCore/mcp-server/`**
