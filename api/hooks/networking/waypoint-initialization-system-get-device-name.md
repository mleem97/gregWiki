---
title: WaypointInitializationSystem.GetDeviceName
description: Hook event for WaypointInitializationSystem.GetDeviceName
path: /api/hooks/networking/waypoint-initialization-system-get-device-name
---

# WaypointInitializationSystem.GetDeviceName

> **Hook ID:** `greg.networking.waypointinitializationsystem.getdevicename`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.GetDeviceName()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GetDeviceName(CableEndpoint endpoint)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `endpoint` | `CableEndpoint` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetDeviceName` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.waypointinitializationsystem.getdevicename", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.waypointinitializationsystem.getdevicename", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.waypointinitializationsystem.getdevicename")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.waypointinitializationsystem.getdevicename", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.waypointinitializationsystem.getdevicename", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.waypointinitializationsystem.getdevicename", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
