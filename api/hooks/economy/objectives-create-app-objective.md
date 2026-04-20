---
title: Objectives.CreateAppObjective
description: Hook event for Objectives.CreateAppObjective
path: /api/hooks/economy/objectives-create-app-objective
---

# Objectives.CreateAppObjective

> **Hook ID:** `greg.economy.objectives.createappobjective`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Objectives.CreateAppObjective()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 CreateAppObjective(Int32 customerID, Int32 appID, Int32 time, Int32 requiredIOPS)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerID` | `Int32` | ... |
| `appID` | `Int32` | ... |
| `time` | `Int32` | ... |
| `requiredIOPS` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateAppObjective` events in `Objectives`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.objectives.createappobjective", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.objectives.createappobjective", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.objectives.createappobjective")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.objectives.createappobjective", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.objectives.createappobjective", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.objectives.createappobjective", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
