---
title: WaypointInitializationSystem.GetCableInfo
description: Hook event for WaypointInitializationSystem.GetCableInfo
path: /api/hooks/networking/waypoint-initialization-system-get-cable-info
---

# WaypointInitializationSystem.GetCableInfo

> **Hook ID:** `greg.networking.waypointinitializationsystem.getcableinfo`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.GetCableInfo()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Nullable`1 GetCableInfo(Int32 cableId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetCableInfo` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.waypointinitializationsystem.getcableinfo", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.waypointinitializationsystem.getcableinfo", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.waypointinitializationsystem.getcableinfo")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.waypointinitializationsystem.getcableinfo", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.waypointinitializationsystem.getcableinfo", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.waypointinitializationsystem.getcableinfo", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Nullable`1`
- **Safe to block?**: Yes
