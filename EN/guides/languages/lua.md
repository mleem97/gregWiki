---
title: Lua Scripting Guide
description: Rapid prototyping and easy modding using Lua and MoonSharp
path: /guides/languages/lua
---

# 🌙 Lua Scripting Guide

Lua is the most accessible way to mod *Data Center*. Powered by the **MoonSharp** interpreter, Lua scripts in gregCore don't require compilation and can be edited while the game is running (with a reload).

## 🚀 Getting Started

1.  **Create a script**: Create a new file named `MyMod.lua`.
2.  **Deployment**: Place the file directly in the `Mods/` folder of your game.
3.  **Run**: Launch the game. gregCore will automatically detect and execute any `.lua` files.

## 🧱 Basic Script Structure

Lua scripts have access to the global `greg` object, which mirrors the C# `GregAPI`.

```lua
-- Log a message to the console
greg.log("Lua Mod Loaded!")

-- 1. Listen for an event
greg.on("greg.SYSTEM.GameLoaded", function(payload)
    greg.ui.show_notification("Hello from Lua!")
end)

-- 2. Call a service
local money = greg.economy.get_balance()
greg.log("Initial Balance: " .. money)
```

## 🪝 Event Handling

When an event fires, your function receives a `payload` table.

```lua
greg.on("greg.PLAYER.CoinChanged", function(payload)
    local amount = payload.Amount
    local total = payload.Total
    greg.log("You just received " .. amount .. " coins!")
end)
```

## ⚙️ Configuration & Persistence

Lua scripts can easily save and load data using the persistence bridge.

```lua
-- Save data
local my_data = {
    first_run = false,
    points = 100
}
greg.persist.save("my_lua_mod", "settings", my_data)

-- Load data
local state = greg.persist.load("my_lua_mod", "settings")
if state then
    greg.log("Loaded points: " .. state.points)
end
```

## 🎨 Building UI

You can create basic IMGUI windows directly from Lua:

```lua
local window_active = true

function on_gui()
    if window_active then
        greg.ui.begin_window("Lua Dashboard")
        greg.ui.label("Control Panel")
        if greg.ui.button("Add 1000$") then
            greg.economy.add_money(1000)
        end
        greg.ui.end_window()
    end
end

-- Register the GUI callback
greg.register_gui(on_gui)
```

## ⚠️ Important Differences from C#

*   **Case Sensitivity**: Lua is case-sensitive. While the C# API is PascalCase, the Lua bridge uses **snake_case** for methods (e.g., `get_balance()` instead of `GetBalance()`).
*   **Zero-based Arrays**: Remember that Unity/C# arrays passed to Lua are often 0-indexed, unlike native Lua tables which are 1-indexed.
*   **Performance**: Lua is interpreted. Do not run heavy loops or complex math in the `Update` hook.

---

::: tip
**Hot Reload**: You can type `/reload lua` in the gregCore DevConsole to reload all scripts without restarting the game!
:::
