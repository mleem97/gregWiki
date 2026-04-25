---
title: WaypointInitializationSystem.LoadNetworkState
description: Hook event for WaypointInitializationSystem.LoadNetworkState
path: /api/hooks/persistence/waypoint-initialization-system-load-network-state
---

# WaypointInitializationSystem.LoadNetworkState

> **Hook ID:** `greg.persistence.waypointinitializationsystem.loadnetworkstate`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.LoadNetworkState()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadNetworkState(NetworkSaveData networkData, List`1 allRackPositions, Int32 saveVersion)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `networkData` | `NetworkSaveData` | ... |
| `allRackPositions` | `List`1` | ... |
| `saveVersion` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadNetworkState` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.waypointinitializationsystem.loadnetworkstate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.waypointinitializationsystem.loadnetworkstate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.waypointinitializationsystem.loadnetworkstate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.waypointinitializationsystem.loadnetworkstate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.waypointinitializationsystem.loadnetworkstate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.waypointinitializationsystem.loadnetworkstate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
