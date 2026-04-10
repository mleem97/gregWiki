---
id: contributor-workshop
title: Contributor Guide — GregModManager
sidebar_label: Contributor Guide
description: Development setup, building, publishing workflow, and release process for GregModManager.
sidebar_position: 20
tags:
  - audience:contributor
  - workshop
---

# Contributor Guide — GregModManager

This guide covers the development workflow for **GregModManager** and how to publish mods to the Steam Workshop.

## Prerequisites

- **Visual Studio 2022** with **.NET Multi-platform App UI** and **Windows App SDK** workloads.
- **.NET 9 SDK** (for the GregModManager MAUI app).
- **.NET 6 SDK** (for framework, plugins, and mods targeting MelonLoader).
- **Steam** with Data Center installed (App ID 4170200).

## Repository structure

Paths are relative to the **`gregFramework/`** workspace root (split repos cloned side by side).

| Path | Purpose |
|------|---------|
| `gregCore/framework/FrikaMF.csproj` (via `gregCore/FrikaMF.sln`) | Core MelonLoader framework DLL |
| `gregExt.*/` | FFM framework plugins (`FFM.Plugin.*` assemblies — one repo per plugin) |
| `gregMod.*/` | Standalone gameplay mods (`FMF.*` assemblies) |
| `gregModmanager/WorkshopUploader.csproj` | GregModManager MAUI app |
| `gregFramework/scripts/Deploy-Release-ToWorkshop.ps1` | Package all builds into Workshop folders (when present in your clone) |
| `gregFramework/scripts/Deploy-Release-ToDataCenter.ps1` | Deploy to game for local testing |

## Building

### Build everything (solution)

```bash
dotnet build gregCore/FrikaMF.sln -c Release
```

### Build standalone mods (per split repo)

```bash
dotnet build gregMod.ConsoleInputGuard/FMF.ConsoleInputGuard.csproj -c Release
dotnet build gregMod.GregifyEmployees/FMF.GregifyEmployees.csproj -c Release
dotnet build gregMod.HexLabelMod/FMF.HexLabelMod.csproj -c Release
dotnet build gregMod.LangCompatBridge/FMF.JoniMLCompatMod.csproj -c Release
```

### Build GregModManager only

```bash
dotnet build gregModmanager/WorkshopUploader.csproj -c Release
```

## Workshop project structure

Each mod/plugin gets its own folder under `<GameRoot>/workshop/`:

```text
<GameRoot>/workshop/
├── FrikaModFramework/
│   ├── content/
│   │   └── Mods/
│   │       └── FrikaModdingFramework.dll
│   ├── metadata.json
│   └── preview.png
├── FFM.Plugin.Multiplayer/
│   ├── content/
│   │   └── FMF/
│   │       └── Plugins/
│   │           └── FFM.Plugin.Multiplayer.dll
│   ├── metadata.json
│   └── preview.png
└── ...
```

The `content/` folder mirrors the game directory structure and is what Steam uploads.

## Deploy to Workshop folders

```bash
pwsh -File scripts/Deploy-Release-ToWorkshop.ps1
```

This script:
1. Builds all framework, plugin, and mod projects.
2. Creates a Workshop project folder for each under `<GameRoot>/workshop/`.
3. Copies the built DLL into `content/<target path>/`.
4. Creates `metadata.json` with title, description, tags, and visibility.

## Publishing workflow

### GUI (recommended)

1. Run the GregModManager app.
2. Open a project from the **Projects** tab.
3. Edit title, description, tags, visibility, and preview image.
4. Write **change notes** describing what changed.
5. Click **Save and upload to Steam**.
6. After upload, the app **syncs** your local `content/` with Steam's version.

### CLI (headless)

```bash
WorkshopUploader.exe --mode publish --path <project-folder>
```

### Post-upload sync

After publishing, the app re-downloads the item from Steam and replaces your local `content/` folder. This ensures your working copy matches exactly what Steam has — similar to `git pull` after `git push`.

## Extending the service layer

The `SteamWorkshopService` in `gregModmanager/Services/SteamWorkshopService.cs` wraps the Facepunch.Steamworks 2.3.3 API. Key methods:

| Method | Purpose |
|--------|---------|
| `PublishAsync` | Create or update a Workshop item with change notes |
| `SyncAfterPublishAsync` | Re-download from Steam to sync local content |
| `BrowseAsync` | Browse all Workshop items with sort/tag filters |
| `SearchAsync` | Text search across Workshop items |
| `ListSubscribedAsync` | List user's subscribed items |
| `ListFavoritedAsync` | List user's favorited items |
| `SubscribeAsync` / `UnsubscribeAsync` | Toggle subscription |
| `AddFavoriteAsync` / `RemoveFavoriteAsync` | Toggle favorite |
| `VoteAsync` | Vote up or down |
| `GetItemDetailsAsync` | Full item details with stats |

## Adding a new mod to the release

1. Create the mod as a split repo folder `gregMod.<Name>/` under the gregFramework workspace (or clone an existing `gregMod.*` repo).
2. Add it to the `$mods` array in `Deploy-Release-ToWorkshop.ps1`.
3. Run the deploy script.
4. Open the new workshop project in the GregModManager and publish.
