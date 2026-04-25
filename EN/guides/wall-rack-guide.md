---
title: greg.WallRack Guide
description: A complete guide to the Wall Placement System.
category: Guides
---

# greg.WallRack Guide

## What is greg.WallRack?
`greg.WallRack` is a framework feature that adds a dynamic mounting grid to all walls in the data center. It allows you to place wall-mounted racks, customer routers, switches, and custom devices directly onto walls—similar to a pegboard in a workshop. 

## Vanilla-Wand-System vs. GregWallRack
| Feature | Vanilla | greg.WallRack |
| :--- | :--- | :--- |
| Wall Mounting | Not supported natively. | Full Grid-based slot mounting. |
| Customer Devices | Fixed spawns or manually placed in racks. | Can be swapped interactively via context menu. |
| Save Integration | Basic state serialization. | Dedicated `wallrack_state` LiteDB schema. |
| Undo/Redo | None. | Full stack support (CTRL+Z/Y) for wall actions. |

## Concept
1. **WallGrid**: A virtual grid instantiated on each purchased wall.
2. **WallSlot**: A specific coordinate (`x, y`) on a `WallGrid`.
3. **WallDevice**: A logical wrapper around IL2CPP objects (like Switches or Routers) that keeps track of their position on the grid.
4. **SlotTypes**: Bit-flags that determine what can be mounted in a slot (e.g., `Rack`, `Switch`, `Router`).

## BuyWall Integration
When you buy a wall via the game's UI, `greg.WallRack` intercepts the `greg.SYSTEM.ButtonBuyWall` event. 
1. The new wall's ID and physical attributes are registered in `GregWallRegistry`.
2. A new `GregWallGrid` is instantiated and attached to this wall.
3. The `greg.WORLD.WallRegistered` event is emitted.

## Wall Build Mode
Activate the build mode via the F8 Settings Menu → `[WallRack]` tab, or press the dedicated Keybind (Default: `W` while in standard build mode). 
- An overlay will show grid lines on all registered walls.
- Hovering over a slot will highlight it.

## Placing Devices
1. Enter Wall Build Mode.
2. Select a wall-mountable device from your inventory.
3. Aim at a valid wall slot.
4. Click to mount.

## Customer-Devices Swap Mechanic
You can swap customer devices (like Routers) directly on the wall without tearing down the infrastructure:
1. Walk up to a mounted device and press the Interact key (`E`).
2. A context menu will appear.
3. Select "Swap Device".
4. The system safely unmounts the old device and mounts the new one in its place.

## Undo / Redo
- **Undo**: Press `CTRL+Z` to reverse the last mount, unmount, swap, or wall purchase.
- **Redo**: Press `CTRL+Y` to re-apply the last undone action.
- The stack holds up to 50 actions.

## Keybinds
*   `W`: Activate Wall Build Mode (when standard build is active).
*   `E`: Open Context Menu on mounted device.
*   `CTRL+Z`: Undo
*   `CTRL+Y`: Redo
*   `ESC`: Close Context Menu.

## Vanilla-Save-Verhalten
If a save file does not originate from a `gregCore`-enabled session, `GregFeatureGuard` activates:
- The F8 `[WallRack]` tab shows a red banner: `⚠ Vanilla Save detected — Wall Rack features disabled`.
- All placement and swap features are locked to prevent save corruption.

## Known Limitations
* See `MISSING.md` for undocumented IL2CPP hooks or unimplemented vanilla UI updates.
