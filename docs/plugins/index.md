---
title: Framework plugins (FFM)
sidebar_label: Plugins overview
description: FFM.Plugin.* modules that extend the framework runtime — distinct from gameplay mods (FMF.*).
---

# Framework plugins (`FFM.Plugin.*`)

These **plugins** ship as `FFM.Plugin.*` assemblies and extend the **framework runtime** (layer **3** in **ModManager → Framework → Plugins → Mods** — [architecture principles](/wiki/meta/system-architecture-principles)). **Source of truth** on disk: one split-repo folder per plugin under the workspace root, named **`gregExt.<Name>/`** (for example `gregExt.AssetExporter/`). Mirrored copies may also exist under `gregCore/plugins/` for solution builds. Deploy built DLLs under the game’s FMF plugin path (see [Game folder layout](/wiki/topics/meta/game-folder-layout)).

Gameplay mods (`FMF.*`) are documented under **[Mods](../mods/index.md)** — not here.

## Plugins

- [FFM.Plugin.AssetExporter](./ffm-plugin-asset-exporter)
- [FFM.Plugin.Multiplayer](./ffm-plugin-multiplayer)
- [FFM.Plugin.PlayerModels](./ffm-plugin-player-models)
- [FFM.Plugin.Sysadmin](./ffm-plugin-sysadmin)
- [FFM.Plugin.WebUIBridge](./ffm-plugin-web-ui-bridge)

## Additional context

- [Mods overview](/wiki/mods/) — gameplay mods (`FMF.*`) and how they differ from plugins
