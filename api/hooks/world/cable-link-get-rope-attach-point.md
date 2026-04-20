---
title: CableLink.GetRopeAttachPoint
description: Hook event for CableLink.GetRopeAttachPoint
path: /api/hooks/world/cable-link-get-rope-attach-point
---

# CableLink.GetRopeAttachPoint

> **Hook ID:** `greg.world.cablelink.getropeattachpoint`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableLink.GetRopeAttachPoint()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Transform GetRopeAttachPoint()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetRopeAttachPoint` events in `CableLink`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.cablelink.getropeattachpoint", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.cablelink.getropeattachpoint", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.cablelink.getropeattachpoint")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.cablelink.getropeattachpoint", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.cablelink.getropeattachpoint", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.cablelink.getropeattachpoint", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Transform`
- **Safe to block?**: Yes
