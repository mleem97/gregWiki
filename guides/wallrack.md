# Wall Rack System

The WallRack mod enables墙面设备放置 in Data Center.

## Features

- Wall-mounted device placement
- Wall type detection (standard/concrete/metal)
- Device swapping
- Undo/redo support

## Usage

```csharp
using gregCore.WallRack;

// Initialize wall registry
GregWallRegistry.Initialize();

// Get wall at position
var wall = GregWallGrid.GetWallAt(position);

// Place device on wall
var device = GregWallPlacementController.PlaceDevice(
    deviceType: " outlet_single",
    wallPosition: new Vector3(3, 2, 0),
    wallNormal: Vector3.forward
);

// Remove device
device.Remove();
```

## Supported Devices

| Device ID | Description |
|-----------|-------------|
| `outlet_single` | Single socket |
| `outlet_dual` | Double socket |
| `outlet_usb` | USB charger |
| `cable_wall` | Cable wall mount |

## Wall Types

- Standard Drywall
- Concrete
- Metal Stud

## API Reference

| Method | Description |
|--------|-------------|
| `PlaceDevice()` | Mount device on wall |
| `RemoveDevice()` | Unmount device |
| `GetWallType()` | Detect wall type |
| `CanPlace()` | Check placement validity |