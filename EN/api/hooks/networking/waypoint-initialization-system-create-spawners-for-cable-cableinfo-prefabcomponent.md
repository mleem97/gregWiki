---
title: WaypointInitializationSystem.CreateSpawnersForCable
description: Hook event for WaypointInitializationSystem.CreateSpawnersForCable
path: /api/hooks/networking/waypoint-initialization-system-create-spawners-for-cable-cableinfo-prefabcomponent
---

# WaypointInitializationSystem.CreateSpawnersForCable

> **Hook ID:** `greg.networking.waypointinitializationsystem.createspawnersforcable`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.CreateSpawnersForCable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CreateSpawnersForCable(CableInfo& cableInfo, PacketSpawnerComponent prefabComponent)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableInfo` | `CableInfo&` | ... |
| `prefabComponent` | `PacketSpawnerComponent` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateSpawnersForCable` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.waypointinitializationsystem.createspawnersforcable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.waypointinitializationsystem.createspawnersforcable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.waypointinitializationsystem.createspawnersforcable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.waypointinitializationsystem.createspawnersforcable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.waypointinitializationsystem.createspawnersforcable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.waypointinitializationsystem.createspawnersforcable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
