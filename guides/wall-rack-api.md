---
title: greg.WallRack API
description: Developer API reference for wall grid extensions.
category: API Reference
---

# greg.WallRack API Reference

## GregWallRegistry
```csharp
public class GregWallRegistry
{
    public static GregWallRegistry Instance { get; }
    public void RegisterWall(string wallId, GregWallGrid grid);
    public void UnregisterWall(string wallId);
    public GregWallGrid? GetGrid(string wallId);
    public GregWallGrid? GetGridAtWorldPos(Vector3 worldPos, float tolerance);
    public IEnumerable<GregWallGrid> GetAllGrids();
    public GregWallSlot? FindNearestFreeSlot(Vector3 worldPos, GregWallSlotType type);
}
```

## GregWallGrid
```csharp
public class GregWallGrid
{
    public void Initialize(string wId, Vector3 origin, Vector3 normal, Vector3 up, int cols, int rows);
    public GregWallSlot? GetSlot(Vector2Int coord);
    public bool MountDevice(Vector2Int coord, GregWallDevice device);
    public bool UnmountDevice(Vector2Int coord);
    public bool SwapDevice(Vector2Int coord, GregWallDevice newDevice);
}
```

## GregWallSlot & GregWallSlotType
```csharp
[Flags]
public enum GregWallSlotType
{
    None    = 0,
    Rack    = 1 << 0,
    Switch  = 1 << 1,
    Router  = 1 << 2,
    Patch   = 1 << 3,
    Generic = 1 << 4,
    Any     = ~0
}
```

## Modder Examples

### Listening to Wall Events
```csharp
GregEventDispatcher.On(
    GregNativeEventHooks.WorldWallRegistered,
    (payload) => {
        string wallId   = GregPayload.Get<string>(payload, "wallId",   null);
        string worldPos = GregPayload.Get<string>(payload, "worldPos", null);
    },
    modId: "myMod"
);
```

### Finding and Mounting a Device
```csharp
if (!GregFeatureGuard.IsEnabled("WallRack")) return;

var registry = GregWallRegistry.Instance;
var slot = registry.FindNearestFreeSlot(someWorldPos, GregWallSlotType.Router);

if (slot != null) {
    var grid = registry.GetGridAtWorldPos(someWorldPos, 0.5f);
    var device = new GregWallDevice {
        deviceId   = "mymod.router.01",
        deviceType = GregWallSlotType.Router,
        deviceLabel = "Customer-Router West-Wand"
    };
    grid?.MountDevice(slot.coord, device);
}
```

### Registering Custom Slot Types
```csharp
GregWallSlotTypeRegistry.RegisterType("myMod.WallPanel", 1 << 5);
```
