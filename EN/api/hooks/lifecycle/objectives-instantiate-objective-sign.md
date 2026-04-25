---
title: Objectives.InstantiateObjectiveSign
description: Hook event for Objectives.InstantiateObjectiveSign
path: /api/hooks/lifecycle/objectives-instantiate-objective-sign
---

# Objectives.InstantiateObjectiveSign

> **Hook ID:** `greg.lifecycle.objectives.instantiateobjectivesign`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Objectives.InstantiateObjectiveSign()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InstantiateObjectiveSign(Int32 objectiveUID, Vector3 objectPos)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `objectiveUID` | `Int32` | ... |
| `objectPos` | `Vector3` | ... |


## Using this Hook

::: tip
Use this hook to react to `InstantiateObjectiveSign` events in `Objectives`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.objectives.instantiateobjectivesign", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.objectives.instantiateobjectivesign", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.objectives.instantiateobjectivesign")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.objectives.instantiateobjectivesign", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.objectives.instantiateobjectivesign", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.objectives.instantiateobjectivesign", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
