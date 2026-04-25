---
title: WaypointInitializationSystem.ActivateSpawnerOnCable
description: Hook event for WaypointInitializationSystem.ActivateSpawnerOnCable
path: /api/hooks/networking/waypoint-initialization-system-activate-spawner-on-cable
---

# WaypointInitializationSystem.ActivateSpawnerOnCable

> **Hook ID:** `greg.networking.waypointinitializationsystem.activatespawneroncable`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.ActivateSpawnerOnCable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ActivateSpawnerOnCable(Entity spawnerEntity, Single speed, Int32 customerId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `spawnerEntity` | `Entity` | ... |
| `speed` | `Single` | ... |
| `customerId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ActivateSpawnerOnCable` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.waypointinitializationsystem.activatespawneroncable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.waypointinitializationsystem.activatespawneroncable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.waypointinitializationsystem.activatespawneroncable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.waypointinitializationsystem.activatespawneroncable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.waypointinitializationsystem.activatespawneroncable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.waypointinitializationsystem.activatespawneroncable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
