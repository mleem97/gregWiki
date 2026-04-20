---
title: Objectives.LoadObjectives
description: Hook event for Objectives.LoadObjectives
path: /api/hooks/persistence/objectives-load-objectives
---

# Objectives.LoadObjectives

> **Hook ID:** `greg.persistence.objectives.loadobjectives`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Objectives.LoadObjectives()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadObjectives(HashSet`1 _activeObjectives)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_activeObjectives` | `HashSet`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadObjectives` events in `Objectives`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.objectives.loadobjectives", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.objectives.loadobjectives", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.objectives.loadobjectives")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.objectives.loadobjectives", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.objectives.loadobjectives", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.objectives.loadobjectives", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
