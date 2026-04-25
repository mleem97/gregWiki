# Grid Placement System

The GridPlacement mod enables furniture placement on a grid system within the game.

## Features

- Grid-based furniture positioning
- Collision detection
- Rotation support
- Snap-to-grid functionality
- Undo/redo support

## Usage

```csharp
using gregCore.GridPlacement;

// Initialize grid
GregGridManager.Initialize(gridSize: 1.0f);

// Place furniture
var result = GregPlacementController.PlaceFurniture(
    prefabId: "shelf_01",
    position: new Vector3(5, 0, 3),
    rotation: Quaternion.identity
);

// Remove furniture
GregPlacementController.RemoveFurniture(furnitureId);
```

## Configuration

```json
{
  "GridPlacement": {
    "GridSize": 1.0,
    "SnapEnabled": true,
    "RotationStep": 90,
    "CollisionCheck": true
  }
}
```

## API Reference

| Method | Description |
|--------|-------------|
| `Initialize()` | Setup grid system |
| `PlaceFurniture()` | Place item on grid |
| `RemoveFurniture()` | Remove from grid |
| `CanPlace()` | Check if position valid |
| `GetOccupied()` | Get occupied cells |

## Grid Coordinates

- Grid origin at (0, 0, 0)
- Cell size configurable
- Supports negative coordinates