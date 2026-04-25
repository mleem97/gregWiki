Title: gregUnlockAll (Lua Example)
Path: /guides/official-mods/unlock-all
Type: How-to
Audience: new user, mod developer
Summary: Overview and installation guide for gregUnlockAll, a sample Lua mod demonstrating max stats and MoonSharp integration.
Suggested Tags: mods, lua, example, moonsharp, cheating, unlocked
Related Pages: /guides/languages/moonsharp-lua-integration, /getting-started/quickstart
Split Recommendation: Keep as one page

# gregUnlockAll (Lua Example)

`gregUnlockAll` is a reference Lua mod for the **gregCore** framework. It serves as a practical demonstration of how to utilize the **MoonSharp** Lua integration to react to game lifecycle events.

## Functionality
Upon loading a save game (`greg.lifecycle.GameLoaded`), the mod automatically grants the player the maximum amount of Money, Experience (XP), and Reputation.

## Installation

1. Copy the `gregUnlockAll.lua` file into your mod scripts folder.
2. Based on the standard `gregCore` specifications, the path is:
   `Data Center/Mods/Scripts/gregUnlockAll.lua`
3. The `GregLuaHost` will automatically detect the file and activate the hooks on the next game launch.

## Configuration
The target values can be adjusted via the `gregCore` configuration system (using the mod ID `gregUnlockAll`).

**Default Values**:
- `target_money`: 999,999,999
- `target_xp`: 999,999
- `target_reputation`: 999,999

---
*This mod is intended for testing and demonstration purposes.*
