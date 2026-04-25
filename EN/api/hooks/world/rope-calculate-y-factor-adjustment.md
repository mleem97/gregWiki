---
title: Rope.CalculateYFactorAdjustment
description: Hook event for Rope.CalculateYFactorAdjustment
path: /api/hooks/world/rope-calculate-y-factor-adjustment
---

# Rope.CalculateYFactorAdjustment

> **Hook ID:** `greg.world.rope.calculateyfactoradjustment`
> **Category:** World
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `Rope.CalculateYFactorAdjustment()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Single CalculateYFactorAdjustment(Single weight)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `weight` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `CalculateYFactorAdjustment` events in `Rope`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.rope.calculateyfactoradjustment", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.rope.calculateyfactoradjustment", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.rope.calculateyfactoradjustment")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.rope.calculateyfactoradjustment", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.rope.calculateyfactoradjustment", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.rope.calculateyfactoradjustment", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Single`
- **Safe to block?**: Yes
