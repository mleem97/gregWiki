---
title: Objectives.StartObjective
description: Hook event for Objectives.StartObjective
path: /api/hooks/lifecycle/objectives-start-objective
---

# Objectives.StartObjective

> **Hook ID:** `greg.lifecycle.objectives.startobjective`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Objectives.StartObjective()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void StartObjective(Int32 _objectiveUID, Boolean _loadSave)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_objectiveUID` | `Int32` | ... |
| `_loadSave` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `StartObjective` events in `Objectives`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.objectives.startobjective", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.objectives.startobjective", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.objectives.startobjective")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.objectives.startobjective", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.objectives.startobjective", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.objectives.startobjective", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
