---
title: Objectives.RemoveObjectiveSign
description: Hook event for Objectives.RemoveObjectiveSign
path: /api/hooks/lifecycle/objectives-remove-objective-sign
---

# Objectives.RemoveObjectiveSign

> **Hook ID:** `greg.lifecycle.objectives.removeobjectivesign`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Objectives.RemoveObjectiveSign()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveObjectiveSign(Int32 objectiveUID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `objectiveUID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `RemoveObjectiveSign` events in `Objectives`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.objectives.removeobjectivesign", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.objectives.removeobjectivesign", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.objectives.removeobjectivesign")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.objectives.removeobjectivesign", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.objectives.removeobjectivesign", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.objectives.removeobjectivesign", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
