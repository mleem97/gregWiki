---
id: repo-inventory
title: Repository inventory
sidebar_label: Repo inventory
description: Current monorepo layout, projects, and known solution drift (contributors).
---

# Repository inventory

This page is the **source of truth snapshot** for how the **gregFramework workspace** (split repositories on disk) is organized today. Use it before large refactors or when onboarding.

## Top-level workspace (`gregFramework/`)

These folders typically sit **next to each other** in a developer workspace (see also [intro](/wiki)):

| Area | Path (on disk) | Role |
|------|----------------|------|
| **Framework core** | `gregCore/` | Runtime, hooks, Harmony, bridge — build **`gregCore/FrikaMF.sln`**; main project **`gregCore/framework/FrikaMF.csproj`**; templates under `gregCore/Templates/` |
| **Mods (split repos)** | `gregMod.<Name>/` (directly under `gregFramework/`) | Standalone gameplay mods (`FMF.*` assemblies); **not** nested under a `gregMods/` umbrella |
| **Extensions / framework plugins (split repos)** | `gregExt.<Name>/` (directly under `gregFramework/`) | FFM framework plugins (`FFM.Plugin.*`); **not** under legacy `StandaloneMods/` paths |
| **Documentation** | `gregWiki/` ([`mleem97/gregWiki`](https://github.com/mleem97/gregWiki)) | **This site**: Docusaurus app at repo root, all authored pages under `docs/` |
| **Workshop / Modmanager** | `gregModmanager/` | **Gregtools Modmanager** (MAUI; `WorkshopUploader.csproj` → `WorkshopUploader.exe`) |
| **Exporter & templates** | `gregDataCenterExporter/` | DC exporter, `FrikaModFramework/` assets, shared templates |
| **Mod store (optional clone)** | `gregStore/` | Web/modstore stack when the private repo is present |
| **IPAM / DHCP tooling** | `gregIPAM/` | e.g. `DHCPSwitches.csproj` |
| **References** | `gregReferences/` | IL2CPP unpack, baseline refs |
| **Meta / internal** | `gregMeta/`, `gregInternalDocs/` | Notes and non-public docs |
| **Examples** | `exGregFramework/` | Sample workspace layout |
| **Other** | `siblingRepos/`, … | Helper scripts and side repos |

## Canonical code locations (split repos)

| Concern | Where to look |
|---------|----------------|
| Framework `.csproj` | `gregCore/framework/FrikaMF.csproj` (solution: `gregCore/FrikaMF.sln`) |
| Plugins (`FFM.Plugin.*`) — authoring | `gregExt.<Name>/` (e.g. `gregExt.AssetExporter/`) |
| Plugins — optional mirrors | `gregCore/plugins/greg.Plugin.*` (und ältere `FFM.Plugin.*`-Spiegel je nach Branch) |
| Mod sources (`FMF.*`) | `gregMod.<Name>/` |
| Templates | `gregCore/Templates/` |
| Wiki content | `gregWiki/docs/` |

## Wiki import (legacy)

Documentation is maintained in this repository under `docs/`; historical GitHub Wiki content has been retired in favor of curated guides and reference pages.

## .NET projects on disk (`*.csproj`)

- **Framework:** `gregCore/framework/FrikaMF.csproj` via **`gregCore/FrikaMF.sln`**.
- **Plugins:** primary checkouts **`gregExt.<Name>/`** (assembly `FFM.Plugin.*.dll`); duplicates under `gregCore/plugins/` for all-in-one builds.
- **Mods:** **`gregMod.<Name>/`** at workspace root (`FMF.*.csproj` names vary).
- **GregModManager:** `gregModmanager/WorkshopUploader.csproj` (separate from the MelonLoader framework solution).

## Build status (framework project)

- `gregCore/framework/FrikaMF.csproj` does not compile the WorkshopManager app; that builds from `gregModmanager/WorkshopUploader.csproj`.
- `dotnet build` on the framework solution (when present under `gregCore/`) builds core + optional `gregCore/plugins/*` — **not** split-repo `gregExt.*` / `gregMod.*` folders unless you add them to the solution.

## `FrikaMF.sln` drift (action items)

1. **Mods outside solution**: Standalone mod projects under `gregMod.*` are usually **not** in `FrikaMF.sln`; build them per repo or add them if you want one `dotnet build` for everything.

2. **Templates vs framework visibility**: Template projects under `gregCore/Templates/` may fail `dotnet build` with `CS0122` if internal API visibility does not match template expectations — treat templates as **samples** until the project graph is aligned.

## Documentation (Docusaurus)

- **Entry**: `/wiki` → [`intro`](/wiki) · **Players:** `/players`
- **Sidebar**: [`sidebars.js`](https://github.com/mleem97/gregWiki/blob/main/sidebars.js)
- **Module catalog** (downloads table): [`src/data/moduleCatalog.ts`](https://github.com/mleem97/gregWiki/blob/main/src/data/moduleCatalog.ts)
- **Landing**: `/` → [`src/pages/index.tsx`](https://github.com/mleem97/gregWiki/blob/main/src/pages/index.tsx)
- **Static catalog page**: `/mods`

## Language bridges (code)

- **Bridge host:** `gregCore/framework/ModLoader/LanguageBridges/GregLanguageBridgeHost.cs` — creates and orchestrates all bridges.
- **Lua VM:** `gregCore/framework/ModLoader/LanguageBridges/LuaLanguageBridge.cs` — MoonSharp integration, script discovery, lifecycle dispatch (`on_update`, `on_scene`, `on_gui`).
- **Lua API modules:** `gregCore/framework/ModLoader/LanguageBridges/LuaModules/`
  - `GregHooksLuaModule.cs` — `greg.on()`, `greg.hook.before/after()` (connects to `GregEventDispatcher` and `HookBinder`)
  - `GregUnityLuaModule.cs` — `greg.unity.*` (handle-based Unity object manipulation, TMPro, TextMesh, physics, materials, transforms)
  - `GregIoLuaModule.cs` — `greg.io.*` (file read/write, directory listing)
  - `GregInputLuaModule.cs` — `greg.input.*` (keyboard via InputSystem)
  - `LuaObjectHandleRegistry.cs` — thread-safe int→object handle registry for Il2Cpp objects
- **Module interface:** `gregCore/framework/ModLoader/LanguageBridges/IGregLuaModule.cs`
- **Rust adapter:** `gregCore/framework/ModLoader/LanguageBridges/RustLanguageBridgeAdapter.cs` (delegates to `FFIBridge`)
- **FFI bridge:** `gregCore/framework/ModLoader/FfiBridge.cs` — native DLL loading, C ABI lifecycle

## Hook / event sources of truth (code)

- **Native pipeline (`EventIds` → `greg.*`):** [`gregCore/framework/src/Sdk/GregNativeEventHooks.cs`](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/src/Sdk/GregNativeEventHooks.cs) with numeric ids in [`EventDispatcher.cs` (`EventIds`)](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/src/ModLoader/EventDispatcher.cs) — wiki table: [greg hooks catalog](../reference/greg-hooks-catalog.md); generator [`gregCore/tools/Generate-GregHookCatalog.ps1`](https://github.com/mleem97/gregFramework/blob/main/gregCore/tools/Generate-GregHookCatalog.ps1).
- **Canonical `greg.*` registry (JSON):** `greg_hooks.json` (repo root; mirrored under `gregCore/gregFramework/`) — regenerate with [`scripts/Generate-GregHooksFromIl2CppDump.ps1`](https://github.com/mleem97/gregFramework/blob/main/gregCore/scripts/Generate-GregHooksFromIl2CppDump.ps1); overview [Greg hooks & event runtime](../framework/greg-hooks-and-events.md).
- **Legacy spellings:** [`GregCompatBridge`](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/src/Sdk/GregCompatBridge.cs) + optional `legacy` fields in `greg_hooks.json`.

## Debugging (MelonLoader, IL2CPP, Unity)

- **Build first:** `dotnet build gregCore/FrikaMF.sln -c Debug` (requires MelonLoader + IL2CPP interop under `MelonLoader/` for your game install, or `lib/references/MelonLoader` — see `tools/refresh_refs.py`).
- **Attach:** Run **Data Center** with MelonLoader, then attach your IDE’s **.NET / CoreCLR** debugger to the game process (process name usually matches the game executable). Breakpoints hit in **Debug** builds of mods/plugins copied into `Mods/`.
- **`FFM.Plugin.AssetExporter`:** The project links `framework/Main.cs` (and related files) **and** references `FrikaMF.csproj`, which would normally produce **CS0436** duplicate-type warnings. Those are **suppressed** in the plugin `.csproj` (`NoWarn`); do not remove the project reference without linking the rest of the `FrikaMF` sources.

## Related

- [Monorepo target layout](/wiki/contributors/monorepo-target-layout) — phased folder goals
- [FMF hook naming](/wiki/reference/fmf-hook-naming) — naming convention
- [Release channels](/wiki/reference/release-channels) — Steam vs GitHub beta
