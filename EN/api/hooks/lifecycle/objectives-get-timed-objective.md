---
title: Objectives.GetTimedObjective
description: Hook event for Objectives.GetTimedObjective
path: /api/hooks/lifecycle/objectives-get-timed-objective
---

# Objectives.GetTimedObjective

> **Hook ID:** `greg.lifecycle.objectives.gettimedobjective`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Objectives.GetTimedObjective()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
ObjectiveTimed GetTimedObjective(Int32 objectiveUID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `objectiveUID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetTimedObjective` events in `Objectives`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.objectives.gettimedobjective", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.objectives.gettimedobjective", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.objectives.gettimedobjective")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.objectives.gettimedobjective", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.objectives.gettimedobjective", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.objectives.gettimedobjective", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `ObjectiveTimed`
- **Safe to block?**: Yes
