---
title: RopeWindEffect.Update
description: Hook event for RopeWindEffect.Update
path: /api/hooks/world/rope-wind-effect-update
---

# RopeWindEffect.Update

> **Hook ID:** `greg.world.ropewindeffect.update`
> **Category:** World
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `RopeWindEffect.Update()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Update()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Update` events in `RopeWindEffect`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.ropewindeffect.update", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.ropewindeffect.update", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.ropewindeffect.update")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.ropewindeffect.update", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.ropewindeffect.update", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.ropewindeffect.update", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
