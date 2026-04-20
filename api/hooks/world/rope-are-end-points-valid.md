---
title: Rope.AreEndPointsValid
description: Hook event for Rope.AreEndPointsValid
path: /api/hooks/world/rope-are-end-points-valid
---

# Rope.AreEndPointsValid

> **Hook ID:** `greg.world.rope.areendpointsvalid`
> **Category:** World
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `Rope.AreEndPointsValid()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean AreEndPointsValid()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `AreEndPointsValid` events in `Rope`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.rope.areendpointsvalid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.rope.areendpointsvalid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.rope.areendpointsvalid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.rope.areendpointsvalid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.rope.areendpointsvalid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.rope.areendpointsvalid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
