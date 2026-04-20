---
title: Lua Modding Guide
sidebar_label: Lua (Scripting)
description: How to build Lua scripts using the new gregCore LuaFFI (MoonSharp) bridge.
---

# Lua Modding with gregCore

Lua is ideal for rapid prototyping, UI tweaks, and gameplay logic. gregCore uses **MoonSharp** to provide a sandboxed Lua environment with a full API bridge.

## 1. Project Setup

Lua mods are stored as folders under `Plugins/Lua/`. Each mod must contain a `main.lua` and optionally a `mod.json`.

```text
Plugins/
└── Lua/
    └── my_lua_mod/
        ├── main.lua        <-- Entry Point
        └── mod.json        <-- Metadaten
```

### `mod.json`

```json
{
  "id": "my_lua_mod",
  "name": "My Lua Mod",
  "version": "1.0.0",
  "author": "Modder",
  "description": "Scripting experiment."
}
```

## 2. Global `greg` API

The Lua bridge injects a global `greg` table into your script.

### Lifecycle Hooks

Implement these functions in `main.lua` to react to game state:

```lua
function on_init()
    greg.log_info("Hello from Lua!")
    greg.show_notification("Lua Mod Active")
end

function on_update(dt)
    -- dt is deltaTime in seconds
end

function on_event(event_id, data)
    -- Handle raw events
end

function on_scene_loaded(name)
    greg.log_info("Entered scene: " .. name)
end
```

### API Examples

```lua
-- Economy
local money = greg.get_player_money()
greg.set_player_money(money + 1000)

-- World
local count = greg.get_server_count()
greg.log_info("Server count: " .. count)

-- Events
greg.subscribe_event(100, function(data)
    greg.log_info("Money changed event triggered!")
end)
```

## 3. Deployment

1. Place your mod folder in `Data Center/Plugins/Lua/`.
2. Ensure `gregCore.dll` is active.
3. Errors will appear in the `MelonLoader` log with the prefix `[LuaMod:<ID>]`.
