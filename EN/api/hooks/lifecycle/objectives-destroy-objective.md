---
title: Objectives.DestroyObjective
description: Hook event for Objectives.DestroyObjective
path: /api/hooks/lifecycle/objectives-destroy-objective
---

# Objectives.DestroyObjective

> **Hook ID:** `greg.lifecycle.objectives.destroyobjective`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Objectives.DestroyObjective()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void DestroyObjective(Int32 _objectiveUID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_objectiveUID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `DestroyObjective` events in `Objectives`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.objectives.destroyobjective", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.objectives.destroyobjective", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.objectives.destroyobjective")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.objectives.destroyobjective", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.objectives.destroyobjective", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.objectives.destroyobjective", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
