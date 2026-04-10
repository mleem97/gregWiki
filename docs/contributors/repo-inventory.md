---
id: repo-inventory
title: Repository inventory
sidebar_label: Repo inventory
description: Current monorepo layout, projects, and known solution drift (contributors).
---

# Repository inventory

This page is the **source of truth snapshot** for how the **gregFramework workspace** (split repositories on disk) is organized today. Use it before large refactors or when onboarding.

## Top-level workspace (`gregFramework/`)

These folders typically sit **next to each other** in a developer workspace (see also [intro](/wiki/docs)):

| Area | Path (on disk) | Role |
|------|----------------|------|
| **Framework core** | `gregCore/` | Runtime, hooks, Harmony, bridge — main project `gregCore/framework/FrikaMF.csproj`; templates under `gregCore/Templates/` |
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
| Framework `.csproj` | `gregCore/framework/FrikaMF.csproj` |
| Plugins (`FFM.Plugin.*`) — authoring | `gregExt.<Name>/` (e.g. `gregExt.AssetExporter/`) |
| Plugins — optional mirrors | `gregCore/plugins/FFM.Plugin.*` |
| Mod sources (`FMF.*`) | `gregMod.<Name>/` |
| Templates | `gregCore/Templates/` |
| Wiki content | `gregWiki/docs/` |

## Wiki import (legacy)

Documentation is maintained in this repository under `docs/`; historical GitHub Wiki content has been retired in favor of curated guides and reference pages.

## .NET projects on disk (`*.csproj`)

- **Framework:** `gregCore/framework/FrikaMF.csproj` (solution `gregCore/FrikaMF.sln` when present).
- **Plugins:** primary checkouts **`gregExt.<Name>/`** (assembly `FFM.Plugin.*.dll`); duplicates under `gregCore/plugins/` for all-in-one builds.
- **Mods:** **`gregMod.<Name>/`** at workspace root (`FMF.*.csproj` names vary).
- **WorkshopManager:** `gregModmanager/WorkshopUploader.csproj` (separate from the MelonLoader framework solution).

## Build status (framework project)

- `gregCore/framework/FrikaMF.csproj` does not compile the WorkshopManager app; that builds from `gregModmanager/WorkshopUploader.csproj`.
- `dotnet build` on the framework solution (when present under `gregCore/`) builds core + optional `gregCore/plugins/*` — **not** split-repo `gregExt.*` / `gregMod.*` folders unless you add them to the solution.

## `FrikaMF.sln` drift (action items)

1. **Mods outside solution**: Standalone mod projects under `gregMod.*` are usually **not** in `FrikaMF.sln`; build them per repo or add them if you want one `dotnet build` for everything.

2. **Templates in `framework/FrikaMF.csproj`**: Template sources under `Templates/` may fail `dotnet build framework/FrikaMF.csproj` with `CS0122` if `Core` visibility does not match template expectations — treat templates as **samples** until the project graph is cleaned up.

## Documentation (Docusaurus)

- **Entry**: `/wiki` → [`intro`](/wiki/docs)
- **Sidebar**: [`sidebars.js`](https://github.com/mleem97/gregWiki/blob/main/sidebars.js)
- **Module catalog** (downloads table): [`src/data/moduleCatalog.ts`](https://github.com/mleem97/gregWiki/blob/main/src/data/moduleCatalog.ts)
- **Landing**: `/` → [`src/pages/index.tsx`](https://github.com/mleem97/gregWiki/blob/main/src/pages/index.tsx)
- **Static catalog page**: `/mods`

## Hook / event sources of truth (code)

- String constants: [`gregCore/framework/FrikaMF/HookNames.cs`](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/FrikaMF/HookNames.cs) (`FFM.*` hook IDs today).
- Numeric IDs: [`gregCore/framework/FrikaMF/EventIds.cs`](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/FrikaMF/EventIds.cs).
- Generated wiki mirror: run [`tools/Generate-FmfHookCatalog.ps1`](https://github.com/mleem97/gregFramework/blob/main/tools/Generate-FmfHookCatalog.ps1) → [`fmf-hooks-catalog`](../reference/fmf-hooks-catalog.md).

## Debugging (MelonLoader, IL2CPP, Unity)

- **Build first:** `dotnet build gregCore/FrikaMF.sln -c Debug` (requires MelonLoader + IL2CPP interop under `MelonLoader/` for your game install, or `lib/references/MelonLoader` — see `tools/refresh_refs.py`).
- **Attach:** Run **Data Center** with MelonLoader, then attach your IDE’s **.NET / CoreCLR** debugger to the game process (process name usually matches the game executable). Breakpoints hit in **Debug** builds of mods/plugins copied into `Mods/`.
- **`FFM.Plugin.AssetExporter`:** The project links `framework/Main.cs` (and related files) **and** references `FrikaMF.csproj`, which would normally produce **CS0436** duplicate-type warnings. Those are **suppressed** in the plugin `.csproj` (`NoWarn`); do not remove the project reference without linking the rest of the `FrikaMF` sources.

## Related

- [Monorepo target layout](/wiki/contributors/monorepo-target-layout) — phased folder goals
- [FMF hook naming](/wiki/reference/fmf-hook-naming) — naming convention
- [Release channels](/wiki/reference/release-channels) — Steam vs GitHub beta
