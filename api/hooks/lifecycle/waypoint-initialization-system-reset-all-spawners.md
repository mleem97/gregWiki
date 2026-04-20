---
title: WaypointInitializationSystem.ResetAllSpawners
description: Hook event for WaypointInitializationSystem.ResetAllSpawners
path: /api/hooks/lifecycle/waypoint-initialization-system-reset-all-spawners
---

# WaypointInitializationSystem.ResetAllSpawners

> **Hook ID:** `greg.lifecycle.waypointinitializationsystem.resetallspawners`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.ResetAllSpawners()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ResetAllSpawners()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ResetAllSpawners` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.waypointinitializationsystem.resetallspawners", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.waypointinitializationsystem.resetallspawners", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.waypointinitializationsystem.resetallspawners")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.waypointinitializationsystem.resetallspawners", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.waypointinitializationsystem.resetallspawners", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.waypointinitializationsystem.resetallspawners", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
