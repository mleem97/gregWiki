---
id: repo-inventory
title: Repository inventory
sidebar_label: Repo inventory
description: Current monorepo layout, projects, and known solution drift (contributors).
---

# Repository inventory

This page is the **source of truth snapshot** for how the **gregFramework workspace** (split repositories on disk) is organized today. Use it before large refactors or when onboarding.

## Top-level workspace (`gregFramework/`)

These folders typically sit **next to each other** in a developer workspace (see also [intro](../intro.md)):

| Area | Path (on disk) | Role |
|------|----------------|------|
| **Framework core** | `gregCore/FrikaMF-StandaloneRepo/` | MelonLoader mod hosting runtime hooks, Harmony, bridge, events; plugins under `plugins/`; templates under `Templates/` |
| **Mods** | `gregMods/gregMod.<Name>/` | Standalone gameplay mods (`FMF.*`) as individual repositories |
| **Extensions** | `gregExtensions/gregExt.<Name>/` | Extension modules (e.g. player models) |
| **Documentation** | `gregWiki/` ([`mleem97/gregWiki`](https://github.com/mleem97/gregWiki)) | **This site**: Docusaurus app at repo root, all authored pages under `docs/` |
| **Legacy / staging exporter** | `gregSta.DataCenterExporter/` | Historical monolith layout; some tools and HexMod assets may still live here during migration |
| **Other tools** | `DHCPSwitches/`, `modstore-platform/`, `References/`, `InternalDocs/`, `meta/` | Supporting repos and internal notes |

## Canonical code locations (split repos)

| Concern | Where to look |
|---------|----------------|
| Framework `.csproj` | `gregCore/FrikaMF-StandaloneRepo/framework/FrikaMF.csproj` |
| Plugins (`FFM.Plugin.*`) | `gregCore/FrikaMF-StandaloneRepo/plugins/` |
| Mod sources | `gregMods/` (per-mod folders) and templates under `gregCore/FrikaMF-StandaloneRepo/Templates/` |
| MCP server | `gregCore/FrikaMF-StandaloneRepo/mcp-server/` (and parallel copies in other repos as wired locally) |
| Wiki content | `gregWiki/docs/` |

## Wiki import (legacy)

Long-form pages mirrored from the GitHub Wiki live under [`docs/wiki-import/`](../wiki-import/Home) and remain linked from many topics.

## .NET projects on disk (`*.csproj`)

Paths below are relative to **`gregCore/FrikaMF-StandaloneRepo/`** (standalone framework repo). Individual mods may live under **`gregMods/gregMod.*/`** with their own `.csproj` names.

| Project | Location | In `FrikaMF.sln`? |
|---------|----------|-------------------|
| FrikaMF | `framework/FrikaMF.csproj` | Yes |
| WorkshopUploader | `tools/steam-workshop-upload/` or legacy `workshopuploader/` (varies by branch) | Usually separate solution |
| FFM.Plugin.* | `plugins/FFM.Plugin.*/` | Yes when included in `FrikaMF.sln` |
| FMF.* mods | `gregMods/gregMod.*/` (clone layout) | Per-repo / optional |
| Templates | `Templates/FMF.*`, `Templates/StandaloneModTemplate/` | No |

## Build status (framework project)

- `framework/FrikaMF.csproj` explicitly **excludes** `workshopuploader/**` from compile (that app builds only via `workshopuploader/WorkshopUploader.csproj` / `WorkshopUploader.sln` in that folder).
- `dotnet build FrikaMF.sln` builds framework and plugin projects under `plugins\` — **not** the MAUI Workshop app (MelonLoader/game refs still required locally unless `CI=true`).

## `FrikaMF.sln` drift (action items)

1. **Mods not in solution**: Standalone mod projects under `mods/` are intentionally omitted from the solution to keep the graph small; add them if you want `dotnet build` for every module in one shot.

2. **Templates in `framework/FrikaMF.csproj`**: Template sources under `Templates/` may fail `dotnet build framework/FrikaMF.csproj` with `CS0122` if `Core` visibility does not match template expectations — treat templates as **samples** until the project graph is cleaned up.

## Documentation (Docusaurus)

- **Entry**: `/wiki` → [`intro`](../intro.md)
- **Sidebar**: [`sidebars.js`](https://github.com/mleem97/gregWiki/blob/main/sidebars.js)
- **Module catalog** (downloads table): [`src/data/moduleCatalog.ts`](https://github.com/mleem97/gregWiki/blob/main/src/data/moduleCatalog.ts)
- **Landing**: `/` → [`src/pages/index.tsx`](https://github.com/mleem97/gregWiki/blob/main/src/pages/index.tsx)
- **Static catalog page**: `/mods`

## Hook / event sources of truth (code)

- String constants: [`framework/FrikaMF/HookNames.cs`](https://github.com/mleem97/gregFramework/blob/master/framework/FrikaMF/HookNames.cs) (`FFM.*` hook IDs today).
- Numeric IDs: [`framework/FrikaMF/EventIds.cs`](https://github.com/mleem97/gregFramework/blob/master/framework/FrikaMF/EventIds.cs).
- Generated wiki mirror: run [`tools/Generate-FmfHookCatalog.ps1`](https://github.com/mleem97/gregFramework/blob/master/tools/Generate-FmfHookCatalog.ps1) → [`fmf-hooks-catalog`](../reference/fmf-hooks-catalog.md).

## Debugging (MelonLoader, IL2CPP, Unity)

- **Build first:** `dotnet build FrikaMF.sln -c Debug` (requires MelonLoader + IL2CPP interop under `MelonLoader/` for your game install, or `lib/references/MelonLoader` — see `tools/refresh_refs.py`).
- **Attach:** Run **Data Center** with MelonLoader, then attach your IDE’s **.NET / CoreCLR** debugger to the game process (process name usually matches the game executable). Breakpoints hit in **Debug** builds of mods/plugins copied into `Mods/`.
- **`FFM.Plugin.AssetExporter`:** The project links `framework/Main.cs` (and related files) **and** references `FrikaMF.csproj`, which would normally produce **CS0436** duplicate-type warnings. Those are **suppressed** in the plugin `.csproj` (`NoWarn`); do not remove the project reference without linking the rest of the `FrikaMF` sources.

## Related

- [Monorepo target layout](./monorepo-target-layout.md) — phased folder goals
- [FMF hook naming](../reference/fmf-hook-naming.md) — naming convention
- [Release channels](../reference/release-channels.md) — Steam vs GitHub beta
