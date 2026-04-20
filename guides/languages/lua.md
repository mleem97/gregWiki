---
title: Modding with Lua
description: Beginner-friendly scripting with the integrated Lua engine
path: /guides/languages/lua
---

# 🌙 Modding with Lua

Lua is the official scripting language of gregCore. It offers the fastest iteration speed because it is integrated directly into the framework via the **MoonSharp** interpreter. You can write scripts and see them run in-game without compiling any `.dll` files.

---

## 🛠️ Setup & Project Structure

gregCore automatically scans the `Data Center/Mods/Lua/` directory for subfolders containing a `main.lua` file.

**Recommended Folder structure:**
```text
Data Center/
  Mods/
    Lua/
      MyCoolMod/
        main.lua
        settings.lua
        assets/
          my_icon.png
```

## 🏗️ The Entry Point (`main.lua`)

Every Lua mod must have a `main.lua`. gregCore calls the following lifecycle functions if they are defined in your script:

```lua
-- main.lua

-- Called when gregCore first loads the script
function on_init()
    greg.log_info("My Mod: Initializing...")
end

-- Called when the game is fully loaded and ready for interaction
function on_ready()
    greg.show_notification("Welcome to the Data Center!")
end

-- Called once per frame. Use sparingly for performance!
function on_update()
    -- logic...
end
```

---

## 🪝 Subscribing to Hooks

Interacting with the game world is done via the `greg.on()` function.

```lua
-- Log every time a cable is connected
greg.on("greg.hardware.CableConnected", function(payload)
    greg.log_info("New cable link detected!")
    greg.log_info("Source: " .. payload.SourceName)
    greg.log_info("Target: " .. payload.TargetName)
end)
```

> 💡 Find the exact names and payloads for all 1771 events in the [**Hooks Reference**](/api/hooks).

---

## 🛠️ Calling Services

Lua has full access to the gregCore service layer through the global `greg` table.

### Example: Economy & Notification
```lua
function give_bonus()
    local current_money = greg.economy.get_balance()
    greg.economy.add_money(1000)
    greg.show_notification("You received a $1000 bonus!")
end
```

### Example: Dynamic UI Interaction
```lua
greg.settings.register_toggle("myMod", "feature_enabled", "Enable Super Mode", false, function(new_state)
    greg.log_info("Super Mode is now: " .. tostring(new_state))
end)
```

---

## 💾 Saving Data (Persistence)

Lua variables are reset when the game restarts. To keep data across sessions, use the Persistence Service.

```lua
-- Saving a simple value
greg.persistence.save("my_key", 42)

-- Loading it back
local val = greg.persistence.load("my_key")
```

---

## 🐞 Debugging Tips

1.  **Console Logs**: Use `greg.log_info(str)` to see text in the MelonLoader console window.
2.  **Runtime Errors**: If your Lua script has a syntax or runtime error, gregCore will log a detailed stack trace to the console in red.
3.  **Hot Reloading**: While not native, you can often re-save your `main.lua` and gregCore will attempt to refresh the script environment (if the developer has enabled hot-reload).

---

## 📖 Related Links
*   [**Lua Payload Mapping**](/api/payloads/lua)
*   [**MoonSharp Documentation**](http://www.moonsharp.org/)
*   [**Example Mod: ResetSwitch (Lua Port)**](/community/examples/resetswitch-lua)
