---
title: WaypointInitializationSystem.CreateSpawner
description: Hook event for WaypointInitializationSystem.CreateSpawner
path: /api/hooks/lifecycle/waypoint-initialization-system-create-spawner
---

# WaypointInitializationSystem.CreateSpawner

> **Hook ID:** `greg.lifecycle.waypointinitializationsystem.createspawner`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.CreateSpawner()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Entity CreateSpawner(List`1 waypoints, Vector3 spawnerPos, Int32 cableId, Int32 customerID, PacketSpawnerComponent prefabComponent, Boolean isForward)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `waypoints` | `List`1` | ... |
| `spawnerPos` | `Vector3` | ... |
| `cableId` | `Int32` | ... |
| `customerID` | `Int32` | ... |
| `prefabComponent` | `PacketSpawnerComponent` | ... |
| `isForward` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateSpawner` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.waypointinitializationsystem.createspawner", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.waypointinitializationsystem.createspawner", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.waypointinitializationsystem.createspawner")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.waypointinitializationsystem.createspawner", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.waypointinitializationsystem.createspawner", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.waypointinitializationsystem.createspawner", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Entity`
- **Safe to block?**: Yes
