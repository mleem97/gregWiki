---
title: Objectives.CreateNewObjective
description: Hook event for Objectives.CreateNewObjective
path: /api/hooks/lifecycle/objectives-create-new-objective
---

# Objectives.CreateNewObjective

> **Hook ID:** `greg.lifecycle.objectives.createnewobjective`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Objectives.CreateNewObjective()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CreateNewObjective(Int32 localisationUID, Int32 _objectiveUID, Vector3 objectivePosition, Int32 xpReward, Int32 reputationReward, Boolean isSub)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `localisationUID` | `Int32` | ... |
| `_objectiveUID` | `Int32` | ... |
| `objectivePosition` | `Vector3` | ... |
| `xpReward` | `Int32` | ... |
| `reputationReward` | `Int32` | ... |
| `isSub` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateNewObjective` events in `Objectives`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.objectives.createnewobjective", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.objectives.createnewobjective", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.objectives.createnewobjective")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.objectives.createnewobjective", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.objectives.createnewobjective", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.objectives.createnewobjective", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
