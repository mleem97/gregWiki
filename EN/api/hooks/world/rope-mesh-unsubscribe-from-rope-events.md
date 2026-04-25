---
title: RopeMesh.UnsubscribeFromRopeEvents
description: Hook event for RopeMesh.UnsubscribeFromRopeEvents
path: /api/hooks/world/rope-mesh-unsubscribe-from-rope-events
---

# RopeMesh.UnsubscribeFromRopeEvents

> **Hook ID:** `greg.world.ropemesh.unsubscribefromropeevents`
> **Category:** World
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `RopeMesh.UnsubscribeFromRopeEvents()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UnsubscribeFromRopeEvents()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `UnsubscribeFromRopeEvents` events in `RopeMesh`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.ropemesh.unsubscribefromropeevents", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.ropemesh.unsubscribefromropeevents", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.ropemesh.unsubscribefromropeevents")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.ropemesh.unsubscribefromropeevents", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.ropemesh.unsubscribefromropeevents", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.ropemesh.unsubscribefromropeevents", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
