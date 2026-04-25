---
title: WaypointInitializationSystem.SafelyDisposeSpawner
description: Hook event for WaypointInitializationSystem.SafelyDisposeSpawner
path: /api/hooks/lifecycle/waypoint-initialization-system-safely-dispose-spawner
---

# WaypointInitializationSystem.SafelyDisposeSpawner

> **Hook ID:** `greg.lifecycle.waypointinitializationsystem.safelydisposespawner`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.SafelyDisposeSpawner()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SafelyDisposeSpawner(Entity spawnerEntity, Int32 cableId, String direction)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `spawnerEntity` | `Entity` | ... |
| `cableId` | `Int32` | ... |
| `direction` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `SafelyDisposeSpawner` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.waypointinitializationsystem.safelydisposespawner", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.waypointinitializationsystem.safelydisposespawner", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.waypointinitializationsystem.safelydisposespawner")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.waypointinitializationsystem.safelydisposespawner", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.waypointinitializationsystem.safelydisposespawner", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.waypointinitializationsystem.safelydisposespawner", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
