Title: IPAM Source Layout
Path: /guides/official-mods/ipam/source-layout
Type: Internal / Advanced
Audience: maintainer, framework developer
Summary: Folder-by-folder map of the gregMod.IPAM C# source code and its architectural responsibilities.
Suggested Tags: architecture, source-layout, maintainer, technical-debt
Related Pages: /maintainer/index, /guides/official-mods/ipam/index
Split Recommendation: Keep as one page

# IPAM Source Layout

This guide provides a structural map of the **gregMod.IPAM** C# project for contributors and maintainers.

---

## Directory Overview

| Folder | Responsibility |
| :--- | :--- |
| **`Core/`** | Entry points, `MelonMod` initialization, global usings, and nullable shims. |
| **`Networking/`** | DHCP logic, Harmony patches on `SetIP`, subnet/customer registries, and IPv4 helpers. |
| **`Config/`** | Domain models for devices, persistence logic, and stable ID generation. |
| **`Ipam/`** | IMGUI overlay components (`IPAMOverlay` partials), reflection helpers, and license management. |
| **`Patches/`** | Standalone Harmony patches for input blocking and UI interaction. |
| **`Input/`** | Game input suppression logic and IMGUI raycast blocking. |
| **`Diagnostics/`** | Logging utilities and debug file handling. |

---

## Module Breakdown

### `IPAMOverlay` (Partials)
To maintain readability, the main UI hub is split into several partial classes:
- **`IPAMOverlay.cs`**: Layout constants and visibility state.
- **`IPAMOverlay.ImGui.cs`**: Procedural textures and `GUIStyle` definitions.
- **`IPAMOverlay.InventoryTable.cs`**: EOL (End of Life) snapshots and sortable data grids.
- **`IPAMOverlay.WindowUi.cs`**: Main window drawing, navigation sections, and octet editors.

### Routing & CLI
- **`Routing/`**: Implements `RouterForwarding` and hardware probing logic.
- **`Cli/`**: A Cisco-like command-line interface for in-game device configuration.

---

## Deployment Artifacts
- **`DHCPSwitches.csproj`**: The primary SDK-style project file.
- **`StreamingAssets.Mods/`**: Contains template `config.json` files for the game's shop pipeline.
