---
title: Technician.RotateTowardsGoal
description: Hook event for Technician.RotateTowardsGoal
path: /api/hooks/hardware/technician-rotate-towards-goal
---

# Technician.RotateTowardsGoal

> **Hook ID:** `greg.hardware.technician.rotatetowardsgoal`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.RotateTowardsGoal()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RotateTowardsGoal(Vector3 goal)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `goal` | `Vector3` | ... |


## Using this Hook

::: tip
Use this hook to react to `RotateTowardsGoal` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.technician.rotatetowardsgoal", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.technician.rotatetowardsgoal", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.technician.rotatetowardsgoal")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.technician.rotatetowardsgoal", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.technician.rotatetowardsgoal", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.technician.rotatetowardsgoal", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
