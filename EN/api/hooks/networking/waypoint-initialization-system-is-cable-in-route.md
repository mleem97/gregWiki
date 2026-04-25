---
title: WaypointInitializationSystem.IsCableInRoute
description: Hook event for WaypointInitializationSystem.IsCableInRoute
path: /api/hooks/networking/waypoint-initialization-system-is-cable-in-route
---

# WaypointInitializationSystem.IsCableInRoute

> **Hook ID:** `greg.networking.waypointinitializationsystem.iscableinroute`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.IsCableInRoute()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsCableInRoute(CableInfo cable, List`1 route)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cable` | `CableInfo` | ... |
| `route` | `List`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsCableInRoute` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.waypointinitializationsystem.iscableinroute", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.waypointinitializationsystem.iscableinroute", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.waypointinitializationsystem.iscableinroute")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.waypointinitializationsystem.iscableinroute", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.waypointinitializationsystem.iscableinroute", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.waypointinitializationsystem.iscableinroute", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
