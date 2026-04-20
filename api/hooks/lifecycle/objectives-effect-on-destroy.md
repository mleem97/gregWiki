---
title: Objectives.EffectOnDestroy
description: Hook event for Objectives.EffectOnDestroy
path: /api/hooks/lifecycle/objectives-effect-on-destroy
---

# Objectives.EffectOnDestroy

> **Hook ID:** `greg.lifecycle.objectives.effectondestroy`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Objectives.EffectOnDestroy()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator EffectOnDestroy(Int32 _objectiveUID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_objectiveUID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `EffectOnDestroy` events in `Objectives`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.objectives.effectondestroy", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.objectives.effectondestroy", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.objectives.effectondestroy")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.objectives.effectondestroy", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.objectives.effectondestroy", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.objectives.effectondestroy", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
