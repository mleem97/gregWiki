Title: Grid Placement Guide
Path: /advanced/grid-placement-guide
Type: Concept
Audience: mod developer
Summary: How to use greg.GridPlacement, a dynamic grid system for rack placement that replaces the vanilla RackHolder plates.
Suggested Tags: grid, placement, world, racks, save-engine
Related Pages: /advanced/save-engine-guide, /advanced/vanilla-save-compatibility
Split Recommendation: Keep as one page

# Grid Placement Guide

## What is greg.GridPlacement?

`greg.GridPlacement` replaces the vanilla rack placement system with a dynamic grid-based system. Unlike the game's default approach, which relies on pre-placed `RackHolder` plates, this system uses an endless virtual grid (similar to construction simulations like *The Sims*).

## Vanilla RackHolder vs. Grid System

| Feature | Vanilla RackHolder | greg.GridPlacement |
| --- | --- | --- |
| **Basis** | Pre-placed plates | Endless virtual grid |
| **Flexibility** | Low | High |
| **Sub-Routing** | No | Yes (2x2 sub-grid for cables, etc.) |

## Grid Terminology

- **Cell**: A single grid unit, matching the footprint of a rack.
- **SubCell**: Each cell is divided into 4 sub-cells (2x2).
- **Snap**: Aligning objects precisely to grid coordinates.
- **Origin**: The `0,0,0` point of the virtual grid.

## How Racks are Placed

1. Activate placement mode via **F8** (or the **B** key).
2. The grid overlay appears.
3. Hovering shows a placement preview.
4. Clicking places the rack directly in world space and updates the `GridManager`.

## Vanilla Save Behavior

When a vanilla save file is loaded, grid placement is automatically disabled (`GridPlacement disabled`). 

The vanilla game saves racks in their physical positions on specific plates. Our system saves them via the `greg.SaveEngine`. Mixing both systems in a single save file would lead to corruption.

## Modder API

```csharp
// Check if the grid feature is active (disabled for vanilla saves)
bool active = GregFeatureGuard.IsEnabled("GridPlacement");

// Subscribe to the rack placement event
GregEventDispatcher.On(GregNativeEventHooks.WorldRackPlaced, (payload) => {
    string rackId  = GregPayload.Get<string>(payload, "rackId", null);
    string coord   = GregPayload.Get<string>(payload, "gridCoord", null);
}, modId: "myMod");

// Check if a cell is free
GregGridManager grid = GregGridManager.Instance;
bool free = !grid.IsCellOccupied(new Vector2Int(3, 5));

// Place a rack programmatically
grid.PlaceRack(new Vector2Int(3, 5), myRack);
```

## Known Limitations

⚠️ Refer to `MISSING.md` in the `greg.GridPlacement` directory: Vanilla suppression (`RackPlacementPatch.cs`) requires an update as the exact `RackHolder` class in `Assembly-CSharp` is still being verified. Standalone mode (via controller) is currently in use.
