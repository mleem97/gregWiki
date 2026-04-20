---
title: WaypointInitializationSystem.LoadNetworkStateCoroutine
description: Hook event for WaypointInitializationSystem.LoadNetworkStateCoroutine
path: /api/hooks/persistence/waypoint-initialization-system-load-network-state-coroutine
---

# WaypointInitializationSystem.LoadNetworkStateCoroutine

> **Hook ID:** `greg.persistence.waypointinitializationsystem.loadnetworkstatecoroutine`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.LoadNetworkStateCoroutine()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator LoadNetworkStateCoroutine(NetworkSaveData networkData, List`1 allRackPositions, Int32 saveVersion)
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
Use this hook to react to `LoadNetworkStateCoroutine` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.waypointinitializationsystem.loadnetworkstatecoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.waypointinitializationsystem.loadnetworkstatecoroutine", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.waypointinitializationsystem.loadnetworkstatecoroutine")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.waypointinitializationsystem.loadnetworkstatecoroutine", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.waypointinitializationsystem.loadnetworkstatecoroutine", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.waypointinitializationsystem.loadnetworkstatecoroutine", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
