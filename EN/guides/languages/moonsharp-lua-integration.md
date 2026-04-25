Title: MoonSharp Lua Integration
Path: /guides/languages/moonsharp-lua-integration
Type: Reference
Audience: mod developer, framework developer
Summary: Technical reference for the Lua integration in gregCore using MoonSharp 2.0.0.
Suggested Tags: lua, moonsharp, scripting, integration, ffi
Related Pages: /getting-started/architecture, /guides/languages/scripting-language-support
Split Recommendation: Keep as one page

# MoonSharp Lua Integration

## What is MoonSharp and why 2.0.0?

MoonSharp is a pure .NET Lua implementation without a native Lua DLL. For `gregCore`, this means:

- Full compatibility with IL2CPP and the MelonLoader setup.
- Lightweight embedding directly within `gregCore.dll`.
- Granular sandbox control.

`gregCore` uses **MoonSharp 2.0.0** as a fixed framework dependency.

## Lua Lifecycle in gregCore

1. **Scan**: The registry searches for `*.lua` files in `Mods/Scripts`.
2. **Activate**: The `GregLuaHost` is activated only when scripts are found.
3. **Execute**: The `LuaFFIBridge` loads the Lua entry points.
4. **Unload**: `Shutdown()` clears the host state.

```csharp
// Signature
public sealed class GregLuaHost : IGregLanguageHost
```

## Minimal Working Example

```lua
-- File: Mods/Scripts/demo.lua

greg.log_info("[demo.lua] init")

greg.on("greg.lifecycle.GameLoaded", function(payload)
    greg.log_info("Game loaded hook fired")
    greg.show_notification("Lua hook active")
end)
```

## Exposed Lua API (Current)

> Source: `LuaFFIBridge.RegisterApi`.

- **Logging**: `log_info`, `log_warning`, `log_error`
- **Economy**: `get_player_money`, `set_player_money`, `get_player_xp`, `set_player_xp`, `get_player_reputation`, `set_player_reputation`
- **World**: `get_server_count`, `get_rack_count`, `get_switch_count`, `get_broken_server_count`, `get_broken_switch_count`
- **Technicians**: `get_free_technician_count`, `get_total_technician_count`, `dispatch_repair_server`, `dispatch_repair_switch`
- **Time**: `get_time_of_day`, `get_day`, `get_seconds_in_full_day`, `set_seconds_in_full_day`
- **Game**: `get_current_scene`, `is_game_paused`, `set_game_paused`, `get_time_scale`, `set_time_scale`, `trigger_save`, `get_difficulty`
- **Player/UI**: `get_player_position`, `show_notification`
- **Events/Hooks**: `subscribe_event`, `fire_event`, `on`, `fire`
- **Config**: `config_set_bool`, `config_get_bool`, `config_set_int`, `config_get_int`, `config_set_string`, `config_get_string`

## Error Handling

Lua syntax or runtime errors are caught and reported in the MelonLoader log.

```csharp
// Signature
private static void SafeCall(LuaPlugin p, Closure? func, params object[] args)
```

## Debugging

- **Primary Channel**: `MelonLoader/Latest.log`
- **Prefixes**:
  - `[gregCore] ...` (Framework-level)
  - `[LuaMod:<id>] ...` (Plugin/Script-layer)

## Manifest and Configuration Requirements

- **Manifest**: [UNVERIFIED] Current Lua manifest schema in the repository is not clearly versioned.
- **`config.json`**: [UNVERIFIED] Module-dependent; simple Key/Value pairs are recommended.

## Deployment

- Place Lua files under `Mods/Scripts`.
- Ensure at least one `*.lua` file is present for `GregLuaHost` to start.

## Known Gaps

See `MISSING.md` for open integration points (e.g., standardized Lua manifest schema).
