---
title: Lua Modding Guide
sidebar_label: Lua (Scripting)
description: How to build Lua scripts using gregCore and the MoonSharp bridge.
---

# Lua Modding with gregCore

Lua is ideal for rapid prototyping, UI tweaks, and gameplay logic that doesn't require deep IL2CPP access.

## 1. Project Setup
Lua mods are standalone scripts located in the game directory. Use the **`HexLabelMod`** Lua template as a starting point.

1.  Copy the `lua/` folder from the `HexLabelMod` template.
2.  Your main logic goes into your `.lua` file (e.g., `MyMod.lua`).

## 2. Using the greg.* API
The Lua bridge injects a global `greg` table into your script.

### Event Handling
You can subscribe to game events dynamically:
```lua
greg.events.on("greg.SERVER.LoadingStarted", function(payload)
    local serverId = greg.payload.get(payload, "EntityId", "unknown")
    greg.log("Server detected: " .. serverId)
end)
```

### Lifecycle Hooks
Register update or GUI loops:
```lua
greg.events.on_update(function(dt)
    -- Logic that runs every frame
end)

greg.events.on_gui(function()
    greg.hud.begin_panel("MyPanel", 10, 10, 200, 50)
    greg.hud.label("Status: Active")
    greg.hud.end_panel()
end)
```

### Targeting
Perform raycasts from the player's view:
```lua
local hit = greg.target.raycast_forward(10.0)
if hit then
    greg.log("Looking at: " .. hit.name)
end
```

## 3. Deployment
1. Place your `.lua` file and its `manifest.json` under `Data Center/Mods/ScriptMods/lua/<YourModName>/`.
2. Ensure `gregCore.dll` is active.
