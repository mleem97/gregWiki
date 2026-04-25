---
title: WaypointInitializationSystem.RegisterCableInNetworkMap
description: Hook event for WaypointInitializationSystem.RegisterCableInNetworkMap
path: /api/hooks/networking/waypoint-initialization-system-register-cable-in-network-map
---

# WaypointInitializationSystem.RegisterCableInNetworkMap

> **Hook ID:** `greg.networking.waypointinitializationsystem.registercableinnetworkmap`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.RegisterCableInNetworkMap()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RegisterCableInNetworkMap(CableInfo cableInfo)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableInfo` | `CableInfo` | ... |


## Using this Hook

::: tip
Use this hook to react to `RegisterCableInNetworkMap` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.waypointinitializationsystem.registercableinnetworkmap", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.waypointinitializationsystem.registercableinnetworkmap", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.waypointinitializationsystem.registercableinnetworkmap")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.waypointinitializationsystem.registercableinnetworkmap", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.waypointinitializationsystem.registercableinnetworkmap", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.waypointinitializationsystem.registercableinnetworkmap", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
