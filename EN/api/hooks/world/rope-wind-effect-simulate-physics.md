---
title: RopeWindEffect.SimulatePhysics
description: Hook event for RopeWindEffect.SimulatePhysics
path: /api/hooks/world/rope-wind-effect-simulate-physics
---

# RopeWindEffect.SimulatePhysics

> **Hook ID:** `greg.world.ropewindeffect.simulatephysics`
> **Category:** World
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `RopeWindEffect.SimulatePhysics()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SimulatePhysics()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SimulatePhysics` events in `RopeWindEffect`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.ropewindeffect.simulatephysics", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.ropewindeffect.simulatephysics", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.ropewindeffect.simulatephysics")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.ropewindeffect.simulatephysics", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.ropewindeffect.simulatephysics", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.ropewindeffect.simulatephysics", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
