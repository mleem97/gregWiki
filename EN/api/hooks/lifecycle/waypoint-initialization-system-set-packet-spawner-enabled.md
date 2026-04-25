---
title: WaypointInitializationSystem.SetPacketSpawnerEnabled
description: Hook event for WaypointInitializationSystem.SetPacketSpawnerEnabled
path: /api/hooks/lifecycle/waypoint-initialization-system-set-packet-spawner-enabled
---

# WaypointInitializationSystem.SetPacketSpawnerEnabled

> **Hook ID:** `greg.lifecycle.waypointinitializationsystem.setpacketspawnerenabled`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.SetPacketSpawnerEnabled()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetPacketSpawnerEnabled(Boolean enabled)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `enabled` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetPacketSpawnerEnabled` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.waypointinitializationsystem.setpacketspawnerenabled", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.waypointinitializationsystem.setpacketspawnerenabled", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.waypointinitializationsystem.setpacketspawnerenabled")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.waypointinitializationsystem.setpacketspawnerenabled", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.waypointinitializationsystem.setpacketspawnerenabled", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.waypointinitializationsystem.setpacketspawnerenabled", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
