---
id: hexviewer-lua
title: HexViewer Mod Tutorial (Lua)
sidebar_label: HexViewer in LUA
description: Technical writing tutorial for the HexViewer Lua implementation using JADE Style and gregSdk v1.0.0-pre.4.
---

This page implements the **Lua HUD layer** for HexViewer using the JADE Style.

Role in architecture:

- Initialize mod via `greg.events.on_update`
- Perform raycasting using `greg.target.raycast_forward`
- Render JADE-compliant HUD via `greg.events.on_gui` and `greg.hud.*`

> Layer ownership: Lua runs in the **Language Bridge layer** and uses the Official SDK API.

## Introduction

Lua provides a high-performance way to implement real-time HUD elements. In this tutorial, we build a "HexViewer" that identifies objects under the player's crosshair.

JADE Style criteria in this tutorial:

- Panel Width: 400px
- Header: `▶ <ObjectType>`
- Data Rows: 8-character right-aligned keys (e.g., `TYPE     : Rack`)

## Project structure (Lua)

```text
gregMod.HexViewer/lua/
├─ manifest.json
├─ config.json
└─ HexViewer.lua
```

Deploy location:

- `Data Center/Mods/ScriptMods/lua/greg.HexViewer/`

## Lua implementation

`lua/HexViewer.lua`:

```lua
-- HexViewer for gregFramework (Lua) - JADE Style Implementation
local mod = {}
local currentTarget = nil
local config = nil

-- JADE Style Layout Constants
local JadeStyle = {
    PanelWidth = 400,
    OffsetTop = 10,
    PaddingLeft = 8
}

function mod.OnLoad()
    -- Load configuration using Official SDK API
    local configPath = greg.paths.scripts .. "/greg.HexViewer/lua/config.json"
    config = greg.io.read_json(configPath)
    if not config then
        greg.log("Failed to load config.json for HexViewer (Lua)")
        return
    end
    greg.log("HexViewer JADE Style initialized (Lua)")
end

-- Raycast update loop - Official SDK API
greg.events.on_update(function(dt)
    if not config or not config.enabled then return end
    
    local distance = config.raycastDistance or 10.0
    currentTarget = greg.target.raycast_forward(distance)
end)

-- JADE Style Rendering - Official SDK API
greg.events.on_gui(function()
    if not currentTarget or not config or not config.enabled then return end
    
    local objType = currentTarget.type or "Unknown"
    local objLower = string.lower(objType)
    
    -- Select header color based on type from config
    local headerColor = config.colors[objLower] or config.colors.unknown
    
    -- Calculate screen center
    local screenWidth = greg.unity.get_screen_width()
    local x = (screenWidth / 2) - (JadeStyle.PanelWidth / 2)
    local y = JadeStyle.OffsetTop
    
    -- Draw JADE Panel
    greg.hud.begin_panel("HexViewer_JADE", x, y, JadeStyle.PanelWidth, 0)
    
    -- Header: "▶ <ObjectType>"
    greg.hud.label("▶ " .. objType, headerColor)
    greg.hud.label(" ") -- Spacer
    
    -- Data Rows with 8-character right-aligned keys
    if config.fields.showType then
        greg.hud.label(string.format("  %-8s : %s", "TYPE", objType))
    end
    
    if config.fields.showColor then
        local color = currentTarget.color or "—"
        greg.hud.label(string.format("  %-8s : %s", "COLOR", color))
    end
    
    if config.fields.showOwner then
        local owner = currentTarget.owner or "—"
        greg.hud.label(string.format("  %-8s : %s", "OWNER", owner))
    end
    
    greg.hud.end_panel()
end)

return mod
```

## Official SDK API Policy

Always use the `greg` global object. If a specific sub-module is unavailable in your build, use the following patterns:

- `greg.target.raycast_forward` (Targeting)
- `greg.hud.begin_panel` (HUD/GUI)
- `greg.events.on_gui` (Event Hooks)

## Integration

Event chain:

1. `on_update` triggers `raycast_forward`.
2. `currentTarget` is cached in the Lua state.
3. `on_gui` renders the cached target using `greg.hud` methods.

## Deploy and test in game

Copy Lua folder:

```powershell
Copy-Item .\lua\* "C:\Program Files (x86)\Steam\steamapps\common\Data Center\Mods\ScriptMods\lua\greg.HexViewer\" -Recurse -Force
```

Validation checklist:

- JADE Panel appears at top-center when hovering objects.
- Labels follow the `KEY : Value` format with 8-character padding.
- `greg.log` confirms "HexViewer JADE Style initialized".

## Troubleshooting

- `greg` is nil: Ensure the gregFramework bridge is active.
- Panel doesn't show: Verify `config.json` has `"enabled": true`.
- Script error: Check the MelonLoader console for Lua traceback.
