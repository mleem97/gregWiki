---
title: FMF.HexLabelMod
sidebar_label: FMF.HexLabelMod
---

<!-- markdownlint-disable MD060 -->

[`gregModHexLabelMod`](https://github.com/mleem97/gregModHexLabelMod) — pure Lua mod powered by gregCore

## Release

| Channel | Link |
| --- | --- |
| **Steam Workshop** | [Subscribe (item 3701404621)](https://steamcommunity.com/sharedfiles/filedetails/?id=3701404621) |
| **GitHub** | [Releases](https://github.com/mleem97/gregModHexLabelMod/releases/latest) |

## Purpose

Overlays the hex color code (`#RRGGBB`) of each `CableSpinner` and `Rack` directly in-world in **Data Center**, so you can identify cable and rack colors at a glance. Includes an IMGUI HUD (top-right) with crosshair-aimed color detection and a full hex viewer (F2).

## Architecture (v00.02+)

Since v00.02, HexLabel is a **pure Lua mod**. The C# assembly (`FMF.HexLabelMod.dll`) is a thin MelonLoader bootstrap that provides metadata only. All mod logic lives in `lua/hexlabel/main.lua` and uses the `greg.*` API provided by gregCore's Lua runtime.

### gregCore APIs used

| API | Purpose |
|-----|---------|
| `greg.unity.find("CableSpinner")` | Find all spinner objects in scene |
| `greg.unity.find("Rack")` | Find all rack objects in scene |
| `greg.unity.get_string(h, "rgbColor")` | Read spinner color property |
| `greg.unity.material_hex(h, "_BaseColor")` | Read material hex color |
| `greg.unity.instantiate(h, parent)` | Clone source TMPro label for spinner |
| `greg.unity.tmpro_set(...)` | Configure cloned TMPro label text/size/color |
| `greg.unity.create_gameobject(name, parent)` | Create rack label container |
| `greg.unity.add_component(h, "TextMesh")` | Add world-space TextMesh to rack |
| `greg.unity.textmesh_set(...)` | Configure rack label |
| `greg.unity.raycast(...)` / `camera_ray()` | HUD crosshair aim detection |
| `greg.unity.get_parent_component(h, type)` | Resolve aimed object type |
| `greg.hook.after(hookName, fn)` | Hook CableSpinner.Start for instant labeling |
| `greg.config.load(path)` | Load `hexposition.cfg` |
| `greg.input.key_pressed("F2")` | Toggle hex viewer |
| `greg.gui.*` | IMGUI HUD and viewer window |
| `greg.io.read_head(path, n)` | Steam log scanning for startup gating |

### Project structure

```text
gregMod.HexLabelMod/
├── lua/hexlabel/main.lua    ← All mod logic (pure Lua, ~300 lines)
├── Main.cs                  ← Thin C# bootstrap (metadata only)
├── FMF.HexLabelMod.csproj   ← Build config
└── README.md
```

## Requirements

| Dependency | Notes |
| --- | --- |
| [MelonLoader](https://melonwiki.xyz/) | With generated IL2CPP assemblies |
| **gregCore** | Provides Lua runtime and `greg.*` API |

## Installation

1. Ensure **gregCore** is installed and up to date.
2. Copy `lua/hexlabel/` to `Mods/ScriptMods/lua/hexlabel/`.
3. Optionally place `FMF.HexLabelMod.dll` in `Mods/` (for MelonLoader metadata).
4. Launch the game — the config file is created automatically on first run.

## Configuration

Edit `UserData/hexposition.cfg` to adjust label positioning and font sizes. The file is auto-generated with defaults on first launch.

```ini
# Hex Label Position Config
# File: UserData/hexposition.cfg

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

## How It Works

1. **Startup** — The Lua script defers initialization until MelonLoader's `Latest.log` confirms the Steam runtime is ready (scans via `greg.io.read_head`).
2. **Spinner labels** — For each `CableSpinner`, the script clones the source `TextMeshProUGUI` label via `greg.unity.instantiate()` and configures it with the resolved hex code using `greg.unity.tmpro_set()`.
3. **Rack labels** — For each `Rack`, a new `TextMesh` component is created via `greg.unity.create_gameobject()` + `greg.unity.add_component()` and positioned at the rack.
4. **Scan loop** — Active spinners and racks are re-checked every 1.5 seconds; deep refresh every 10 seconds.
5. **Harmony hook** — `greg.hook.after()` subscribes to `CableSpinner.Start` to label new spinners immediately on spawn.
6. **HUD** — IMGUI overlay drawn via `greg.gui.*` in `on_gui()`, showing crosshair-aimed hex color detected via `greg.unity.raycast()`.
7. **Hex viewer** — F2 toggles a full-screen color list collected from scene CableSpinners.

## Migration from v00.01

If upgrading from the standalone C# version:

1. Remove the old `FMF.HexLabelMod.dll` (or keep it — the new version is just a bootstrap stub).
2. Install gregCore.
3. Deploy `lua/hexlabel/main.lua` to `Mods/ScriptMods/lua/hexlabel/`.
4. Your `hexposition.cfg` is fully compatible.

## Sources

- Repository: [github.com/mleem97/gregModHexLabelMod](https://github.com/mleem97/gregModHexLabelMod)
- See also: [Mods overview](/wiki/mods/) · [HexMod hub](/wiki/framework/hexmod)
