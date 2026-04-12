---
title: Getting started
sidebar_label: Getting started
description: Workspace layout (gregFramework), building gregCore, hooks, and your first mod.
---

The workspace is **multi-repo**: several Git checkouts live **side by side** under a common `gregFramework/` folder. **Logical stack:** **ModManager → Framework / SDK → Plugins → Mods** — see [System architecture & documentation principles](/wiki/getting-started/architecture).

| Folder | Role |
| --- | --- |
| **`gregCore/`** | Framework: **`gregCore/gregCore.sln`**, main project **`gregCore/gregCore.csproj`**; SDK under `gregSdk/`; MCP under `gregCore/mcp-server/` |
| **`gregMod.<Name>/`** | Gameplay mods (often `FMF.*` assemblies), **flat** next to `gregCore/` |
| **`gregExt.<Name>/`** | Framework plugins (`FFM.Plugin.*` / `greg.Plugin.*`), also flat |
| **`gregModmanager/`** | GregModManager / Workshop UI (`GregModmanager.csproj`) |
| **`gregDataCenterExporter/`** | Exporter, templates, mirrors |
| **`gregWiki/`** | This documentation site (Docusaurus) |

Rust/native mods are loaded through the core FFI layer; bridge code lives under **`gregCore/gregModLoader/LanguageBridges/`**.

## Build the framework

```bash
dotnet build gregCore/gregCore.csproj -c Release
```

Or open **`gregCore/gregCore.sln`** in your IDE and build the **`gregCore/gregCore.csproj`** output. A **Release** build produces **`gregCore.dll`** (the MelonLoader framework assembly).

For CI without a local game install, many projects support **`-p:CI=true`** (see each `.csproj`).

**Prerequisites:** MelonLoader **net6** assemblies and game Il2Cpp interop must be available at runtime/build. `gregCore` now contains a recursive reference loader in `gregModLoader/References/ReferenceScanner.cs` that scans a configured base folder for `*.dll`.

`gregCore` also includes `MoonSharp.Interpreter.dll` (`v2.0.0.0`) in its release package. Place it next to `gregCore.dll` under `Data Center/Mods/`.

### Quick install

1. Build or obtain **`gregCore.dll`**.
2. Copy it to **`Data Center/Mods/`**.
3. **C# mods:** additional managed mods stay under **`Data Center/Mods/`**.
4. **Lua mods:** place `.lua` trees under **`Data Center/Mods/ScriptMods/lua/`**.
5. **Rust / native mods:** place modules under **`Data Center/Mods/RustMods/`**.
6. Launch the game and confirm load order in **`MelonLoader/Latest.log`**.

## Supported modding languages

gregCore supports **four modding paths** in parallel:

| Language | Role |
| --- | --- |
| **C#** | Full MelonLoader / IL2CPP interop, Harmony, and **`gregSdk`** — the default for framework extensions. |
| **Lua** | MoonSharp-hosted scripts; game access through the **`greg.*`** API. Deploy under **`Data Center/Mods/ScriptMods/lua/`**. |
| **TypeScript/JS** | Web-tech modding via the TS bridge. Deploy under **`Data Center/Mods/ScriptMods/tsjs/`**. |
| **Rust / native** | **`FFIBridge`** native pipeline; deploy under **`Data Center/Mods/RustMods/`**. |

## Hooks and registries

| Topic | Where |
| --- | --- |
| **Canonical `greg.*` (JSON, Il2Cpp)** | Repo root **`greg_hooks.json`** |
| **`greg.*` Hooks** | **`gregSdk.gregNativeEventHooks`** — [greg hooks catalog](/wiki/reference/greg-hooks-catalog), source `gregCore/gregSdk/gregNativeEventHooks.cs` |
| **Runtime architecture** | [greg hooks catalog & events runtime](/wiki/reference/greg-hooks-catalog) |

Engine integration rule:

- Anything sourced from Unity engine APIs must be normalized into canonical `greg.*` hook/event contracts before consumption.

## Start a new mod

1. Create **`gregMod.<Name>/`** under `gregFramework/`.
2. Add **`ProjectReference`** to **`gregCore/gregCore.csproj`**.
3. Use **`gregSdk`** (`gregEventDispatcher`, `gregNativeEventHooks`, …).
4. Template: **`gregCore/Templates/CustomContentPack/`**.
