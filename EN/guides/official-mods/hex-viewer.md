Title: HexViewer - Hardware Inspector
Path: /guides/official-mods/hex-viewer
Type: How-to
Audience: new user, mod developer
Summary: Overview and installation guide for gregMod.HexViewer, a hardware inspector mod for Data Center.
Suggested Tags: mods, hex-viewer, hardware, inspector, tools
Related Pages: /getting-started/quickstart, /tools/greg-modmanager
Split Recommendation: Keep as one page

# HexViewer - Hardware Inspector

`gregMod.HexViewer` allows you to inspect the raw hexadecimal data of in-game hardware components. It features a JADE-inspired dark UI design and is fully compatible with the modern Unity Input System.

## Features
- **F1 Toggle**: Easily open or hide the hexadecimal viewer overlay.
- **Dark Aesthetic**: Modern UI inspired by the JADE design system.
- **Input Compatibility**: Built for the latest Unity Input System (no legacy input dependencies).

## Installation

1. Ensure **MelonLoader** (v0.6+) is installed.
2. Download and place `gregCore.dll` and `gregMod.HexViewer.dll` into your `Data Center/Mods/` folder.
3. Start the game and press **F1** to activate the viewer.

## Dependencies
- **`gregCore.dll`**: The core framework is required for this mod to function.

## Building from Source

To build the mod manually:

```powershell
cd gregFramework/src/gregMod.HexViewer
dotnet build -c Release
```
The output DLL will be located in `bin/Release/net6.0/gregMod.HexViewer.dll`.

## Credits & Community

**Author**: MLeeM97 (teamGreg)  
**Contributors**: Joniii, mochimus (Code & Tests); Baker, Sharpy1o1, MachineFreak (Testing & Modeling).

Special thanks to the **Discord Community** and our sponsors for supporting the project.

---
*gregFramework — Powered by the Community!*
