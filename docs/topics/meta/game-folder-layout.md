---
title: Game folder layout (FMF / MelonLoader)
sidebar_label: Game folder layout
description: Canonical paths for mod configs, FMF plugins, and MelonLoader mods under the Data Center game root.
---

# Game folder layout (FMF / MelonLoader)

This page is the **single reference** for where mod-related files live next to the game executable (`{GameRoot}`). MelonLoader sets `{GameRoot}/UserData` via `MelonEnvironment.UserDataDirectory`, `{GameRoot}/Mods` for **MelonMods**, and `{GameRoot}/Plugins` for **MelonPlugins** (e.g. `FMF.ModPathRedirector.dll`).

## Summary

| Content | Path | Format / notes |
|--------|------|----------------|
| **Mod configuration & sidecars** | `{GameRoot}/UserData/ModCfg/` | **JSON** config files; additional sidecar files (e.g. `custom_employees_hired.txt`) live here so mod-related files stay in one place. |
| **FMF framework plugins** (FFM.Plugin.*) | `{GameRoot}/FMF/Plugins/` | DLLs; **MelonLoader** only scans `{GameRoot}/Mods` by default — see below. |
| **Plugins** (MelonLoader, e.g. ModPathRedirector) | `{GameRoot}/Plugins/` | MelonLoader `Plugins` folder — **MelonPlugin** DLLs only. |
| **Mods** (MelonLoader, e.g. FMF.Mod.*) | `{GameRoot}/Mods/` | MelonLoader `Mods` folder — **MelonMod** DLLs. |

## UserData/ModCfg

- All **mod-related** configuration and JSON sidecars live under **`UserData/ModCfg`**.
- On first start, missing files are created; on existing installs, older files may be migrated from **`UserData/`** (root) into **`ModCfg/`** when still present.
- Examples: `multiplayer-sync.config.json`, `pluginsync.config.json`.
- Framework metadata (e.g. save-compat stamp) lives under **`UserData/ModCfg/FrikaFM/`** (migrated from `UserData/FrikaFM`).

## FMF/Plugins and MelonLoader

**FFM plugin DLLs** canonically live under **`{GameRoot}/FMF/Plugins`**. MelonLoader enumerates **`Mods/`** by default. Practical options:

1. **Also place** (or link) DLLs under **`Mods/`** — common path for automatic loading.
2. Use **subfolders** under `Mods` if your MelonLoader version loads mods from subdirectories (check your ML version).
3. **PluginSync** downloads from the framework land under **`FMF/Plugins/PluginSync/...`**.

## Mods (FMF-based)

Standard **MelonLoader mods** (including FMF-based mods) install under **`{GameRoot}/Mods/`** as usual.

## Steam Workshop (game) vs MelonLoader

The game stores subscribed Workshop content under **`{GameRoot}/{ExeName}_Data/StreamingAssets/mods/workshop_<PublishedFileId>/WorkshopUploadContent`** (native `ModLoader`, not MelonLoader).

- **MelonLoader** scans **`{GameRoot}/Mods`** (including subfolders, depending on settings), **not** arbitrary paths via `Loader.cfg`.
- **UserData:** MelonLoader config lives under **`{GameRoot}/UserData/`** (e.g. **`MelonLoader.cfg`** or, depending on version, **`UserData/MelonLoader/Loader.cfg`** — verify on install). For subfolder loading: **`disable_subfolder_load = false`**, optionally **`disable_subfolder_manifest = true`**.
- **Point Workshop DLLs into Melon’s scan:** use a junction (or symlink) from a folder under **`Mods/`** to the item’s **`WorkshopUploadContent`** path, e.g. (PowerShell, adjust paths):

```powershell
$game = "C:\Path\To\Data Center"
$id = "12345678901234567"
$target = Join-Path $game "Data Center_Data\StreamingAssets\mods\workshop_$id\WorkshopUploadContent"
$link = Join-Path $game "Mods\workshop_$id"
cmd /c mklink /J "$link" "$target"
```

Without a junction, Melon mods must still live physically under **`Mods/`** or be deployed there by your distribution.

**WorkshopUploader templates (modded):** Under **`content/`**, **`Mods/`**, **`Plugins/`**, and a **`ModFramework/`** tree are created — **`ModFramework/FMF/Plugins`** maps to **`{GameRoot}/FMF/Plugins`** if you junction **`FMF`** to **`…/WorkshopUploadContent/ModFramework/FMF`**. Additional framework files (config, assets) can be bundled under **`ModFramework/`**.

## See also

- [Meta & operations](/wiki/topics/meta/overview)
- Mod configuration contracts are described with runtime docs in [Framework](/wiki/mods/framework) and the core `README` in **gregFramework** (paths under **`UserData/ModCfg/`** follow the conventions above).
