---
title: FMF.HexLabelMod
sidebar_label: FMF.HexLabelMod
---

<!-- markdownlint-disable MD060 -->

[`gregModHexLabelMod`](https://github.com/mleem97/gregModHexLabelMod) (assembly `FMF.HexLabelMod.dll`)

## Release

| Channel | Link |
| --- | --- |
| **Steam Workshop** | [Subscribe (item 3701404621)](https://steamcommunity.com/sharedfiles/filedetails/?id=3701404621) |
| **GitHub** | [Releases](https://github.com/mleem97/gregModHexLabelMod/releases/latest) |

## Purpose

Standalone MelonLoader mod for **Data Center** that overlays the hex color code of each `CableSpinner` and `Rack` directly in-world, so you can identify cable and rack colors at a glance without opening any menu.

Rewritten from the former root `HexLabelMod` for the FrikaModdingFramework workflow, now running fully standalone.

## Requirements

| Dependency | Notes |
| --- | --- |
| [MelonLoader](https://melonwiki.xyz/) | With generated IL2CPP assemblies |

This mod runs standalone and does **not** require FMF runtime APIs.

## Installation

1. **Recommended:** Subscribe on the [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3701404621), or download `FMF.HexLabelMod.dll` from the [latest GitHub release](https://github.com/mleem97/gregModHexLabelMod/releases/latest).
2. If you use a manual DLL, drop `FMF.HexLabelMod.dll` into your `Mods/` folder.
3. Launch the game — the config file is created automatically on first run at:

```text
UserData/hexposition.cfg
```

## Configuration

Edit `UserData/hexposition.cfg` to adjust label positioning and font sizes. The file is auto-generated with defaults on first launch and regenerated if any keys are missing.

```ini
# Hex Label Position Config
# File: UserData/hexposition.cfg
# Edit values, then restart game.

# Spinner (UI text near cable spool)
spinner_offset_x=0
spinner_offset_y=-6
spinner_font_min=1.8
spinner_font_max=6.2
spinner_font_scale=0.24

# Rack (world-space text at rack back-right-bottom)
rack_offset_right=-0.03
rack_offset_back=0.06
rack_offset_down=-0.02
rack_font_size=42
rack_character_size=0.05
rack_scale=1
```

### Config Keys

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `spinner_offset_x` | float | `0` | Horizontal offset relative to the source label |
| `spinner_offset_y` | float | `-6` | Vertical offset relative to the source label |
| `spinner_font_min` | float | `1.8` | Minimum auto-size font size (TMPro) |
| `spinner_font_max` | float | `6.2` | Maximum auto-size font size (TMPro) |
| `spinner_font_scale` | float | `0.24` | Scale factor applied to the source label's font size |
| `rack_offset_right` | float | `-0.03` | World-space offset along rack's right axis |
| `rack_offset_back` | float | `0.06` | World-space offset along rack's back axis |
| `rack_offset_down` | float | `-0.02` | World-space offset along rack's down axis |
| `rack_font_size` | int | `42` | Font size for the world-space `TextMesh` label |
| `rack_character_size` | float | `0.05` | Character size for the world-space `TextMesh` label |
| `rack_scale` | float | `1` | Uniform world-space scale of the rack label object |

## Live Reload *(restricted)*

Pressing **Ctrl+F1** toggles live config reload (6-second interval), allowing you to tune label positions without restarting the game. This feature is restricted to a specific Steam account and will silently do nothing for all other users.

## Build

```powershell
dotnet build .\gregModHexLabelMod\FMF.HexLabelMod.csproj
```

Output lands in the standard MelonLoader `Mods/` folder as configured in the `.csproj`.

## How It Works

1. **Startup** — The mod defers full initialization until MelonLoader's `Latest.log` confirms the Steam runtime is ready (SteamID or Steam marker detected).
2. **Spinner labels** — Every `CableSpinner` gets a cloned `TextMeshProUGUI` label injected into its UI hierarchy, displaying the resolved hex code in white. Color is read from `rgbColor`, then from the `_BaseColor`/`_Color` material property as fallback.
3. **Rack labels** — Every `Rack` gets a world-space `TextMesh` label positioned at its back-right-bottom corner, facing away from the rack front.
4. **Scan loop** — Active spinners and racks are re-checked every 1.5 seconds to catch newly spawned objects.
5. **Harmony patch** — `CableSpinner.Start` is patched to inject the label immediately on spawn, before the first scan cycle runs.

## Notes

- Original gameplay behavior is unaffected.
- Source lives in the split repo [`gregModHexLabelMod`](https://github.com/mleem97/gregModHexLabelMod), not under a legacy `mods/` tree.
- The config file is fully rewritten if any expected keys are missing (for example, after an update adds new keys).
- FMF assembly presence is no longer required as a startup gate.

## Sources

- Repository: [github.com/mleem97/gregModHexLabelMod](https://github.com/mleem97/gregModHexLabelMod)
- See also: [Mods overview](/wiki/mods/) · [HexMod hub](/wiki/framework/hexmod)
