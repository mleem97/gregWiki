Title: GregifyEmployees - Greg Army
Path: /guides/official-mods/gregify-employees
Type: How-to
Audience: new user, mod developer
Summary: Overview and installation guide for gregMod.GregifyEmployees, a mod that enhances technicians with custom AI and skill systems.
Suggested Tags: mods, ai, employees, gregify, automation
Related Pages: /getting-started/quickstart, /api/hooks/index
Split Recommendation: Keep as one page

# GregifyEmployees - Greg Army

`gregMod.GregifyEmployees` transforms all in-game technicians into "Gregs," granting them enhanced AI capabilities, autonomous task handling, and a tiered skill system ranging from Intern to Principal.

## Features

- **The Greg Transformation**: All employees are visually and logically converted into Gregs with custom names.
- **Enhanced AI**: The custom `GregAI` component allows technicians to handle complex tasks autonomously.
- **Skill Tiers**: Technicians progress through levels (Intern, Junior, Senior, Principal), affecting their efficiency and speed.
- **Command Center**: Access the Greg Command Center (F9) to manage your fleet of Gregs.

## Installation

1. Ensure **MelonLoader** (v0.6+) is installed.
2. Download and place `gregCore.dll` and `gregMod.GregifyEmployees.dll` into your `Data Center/Mods/` folder.
3. Start the game and press **F9** to open the management panel.

## Dependencies

- **`gregCore.dll`**: The core framework is required for this mod to function.

## Building from Source

To build the mod manually:

```powershell
cd gregFramework/src/gregMod.GregifyEmployees
dotnet build -c Release
```
The output DLL will be located in `bin/Release/net6.0/gregMod.GregifyEmployees.dll`.

## Credits & Community

**Author**: MLeeM97 (teamGreg)  
**Contributors**: Joniii, mochimus (Code & Tests); Baker, Sharpy1o1, MachineFreak (Testing & Modeling).

---
*gregFramework — Powered by the Community!*
