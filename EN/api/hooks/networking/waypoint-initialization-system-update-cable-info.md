---
title: WaypointInitializationSystem.UpdateCableInfo
description: Hook event for WaypointInitializationSystem.UpdateCableInfo
path: /api/hooks/networking/waypoint-initialization-system-update-cable-info
---

# WaypointInitializationSystem.UpdateCableInfo

> **Hook ID:** `greg.networking.waypointinitializationsystem.updatecableinfo`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.UpdateCableInfo()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateCableInfo(Int32 cableId, CableInfo info)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |
| `info` | `CableInfo` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateCableInfo` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.waypointinitializationsystem.updatecableinfo", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.waypointinitializationsystem.updatecableinfo", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.waypointinitializationsystem.updatecableinfo")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.waypointinitializationsystem.updatecableinfo", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.waypointinitializationsystem.updatecableinfo", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.waypointinitializationsystem.updatecableinfo", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
