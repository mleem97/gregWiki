---
title: HexMod
sidebar_label: HexMod
description: Hex label mod — in-world hex color labels for cable spinners and racks, now powered by Lua.
---

# HexMod

The **Hex Label** mod adds in-world hex color labels for cable spinners and racks.

Since **v00.02**, HexLabel is a **pure Lua mod** powered by gregCore's Lua runtime. All mod logic lives in `lua/hexlabel/main.lua`; the C# assembly is a thin metadata-only bootstrap.

## Steamworks Info

| Field | Value |
|-------|-------|
| **Assembly** | `FMF.HexLabelMod.dll` (bootstrap only) |
| **Lua script** | `Mods/ScriptMods/lua/hexlabel/main.lua` |
| **Version** | `00.02.0000` |
| **Author** | mleem97 |
| **Game** | Data Center (App 4170200) |
| **Workshop Tags** | `modded`, `melonloader`, `mod` |

## Downloads

- **Steam Workshop:** [FMF.HexLabelMod — workshop item](https://steamcommunity.com/sharedfiles/filedetails/?id=3701404621) (subscribe in-game or via GregModManager)
- **GitHub:** [Latest release](https://github.com/mleem97/gregModHexLabelMod/releases/latest)
- **Manual:** Copy `lua/hexlabel/` to `Mods/ScriptMods/lua/hexlabel/`

## Architecture

| Component | Location | Role |
|-----------|----------|------|
| **Lua script** | `lua/hexlabel/main.lua` | All mod logic: labeling, HUD, hex viewer, config |
| **C# bootstrap** | `Main.cs` → `FMF.HexLabelMod.dll` | MelonLoader metadata only |
| **gregCore APIs** | `greg.unity.*`, `greg.hook.*`, `greg.gui.*`, `greg.io.*`, `greg.input.*` | Generic framework services used by the Lua script |

## Source & layout

- **Repository:** [`mleem97/gregModHexLabelMod`](https://github.com/mleem97/gregModHexLabelMod)

See also the detailed wiki article [FMF.HexLabelMod](/wiki/mods/fmf-hex-label-mod).
