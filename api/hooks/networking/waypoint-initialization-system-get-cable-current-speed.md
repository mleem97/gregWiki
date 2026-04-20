---
title: WaypointInitializationSystem.GetCableCurrentSpeed
description: Hook event for WaypointInitializationSystem.GetCableCurrentSpeed
path: /api/hooks/networking/waypoint-initialization-system-get-cable-current-speed
---

# WaypointInitializationSystem.GetCableCurrentSpeed

> **Hook ID:** `greg.networking.waypointinitializationsystem.getcablecurrentspeed`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.GetCableCurrentSpeed()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Single GetCableCurrentSpeed(Int32 cableId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetCableCurrentSpeed` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.waypointinitializationsystem.getcablecurrentspeed", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.waypointinitializationsystem.getcablecurrentspeed", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.waypointinitializationsystem.getcablecurrentspeed")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.waypointinitializationsystem.getcablecurrentspeed", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.waypointinitializationsystem.getcablecurrentspeed", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.waypointinitializationsystem.getcablecurrentspeed", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Single`
- **Safe to block?**: Yes
