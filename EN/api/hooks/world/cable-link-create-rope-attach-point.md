---
title: CableLink.CreateRopeAttachPoint
description: Hook event for CableLink.CreateRopeAttachPoint
path: /api/hooks/world/cable-link-create-rope-attach-point
---

# CableLink.CreateRopeAttachPoint

> **Hook ID:** `greg.world.cablelink.createropeattachpoint`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableLink.CreateRopeAttachPoint()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CreateRopeAttachPoint()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CreateRopeAttachPoint` events in `CableLink`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.cablelink.createropeattachpoint", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.cablelink.createropeattachpoint", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.cablelink.createropeattachpoint")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.cablelink.createropeattachpoint", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.cablelink.createropeattachpoint", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.cablelink.createropeattachpoint", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
