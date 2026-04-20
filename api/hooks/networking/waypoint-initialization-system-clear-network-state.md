---
title: WaypointInitializationSystem.ClearNetworkState
description: Hook event for WaypointInitializationSystem.ClearNetworkState
path: /api/hooks/networking/waypoint-initialization-system-clear-network-state
---

# WaypointInitializationSystem.ClearNetworkState

> **Hook ID:** `greg.networking.waypointinitializationsystem.clearnetworkstate`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.ClearNetworkState()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ClearNetworkState()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ClearNetworkState` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.waypointinitializationsystem.clearnetworkstate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.waypointinitializationsystem.clearnetworkstate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.waypointinitializationsystem.clearnetworkstate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.waypointinitializationsystem.clearnetworkstate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.waypointinitializationsystem.clearnetworkstate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.waypointinitializationsystem.clearnetworkstate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
