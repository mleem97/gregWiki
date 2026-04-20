---
title: WaypointInitializationSystem.OnDestroy
description: Hook event for WaypointInitializationSystem.OnDestroy
path: /api/hooks/lifecycle/waypoint-initialization-system-on-destroy
---

# WaypointInitializationSystem.OnDestroy

> **Hook ID:** `greg.lifecycle.waypointinitializationsystem.ondestroy`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.OnDestroy()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnDestroy()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnDestroy` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.waypointinitializationsystem.ondestroy", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.waypointinitializationsystem.ondestroy", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.waypointinitializationsystem.ondestroy")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.waypointinitializationsystem.ondestroy", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.waypointinitializationsystem.ondestroy", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.waypointinitializationsystem.ondestroy", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
