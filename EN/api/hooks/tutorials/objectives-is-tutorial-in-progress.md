---
title: Objectives.IsTutorialInProgress
description: Hook event for Objectives.IsTutorialInProgress
path: /api/hooks/tutorials/objectives-is-tutorial-in-progress
---

# Objectives.IsTutorialInProgress

> **Hook ID:** `greg.tutorials.objectives.istutorialinprogress`
> **Category:** Tutorials
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Objectives.IsTutorialInProgress()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsTutorialInProgress()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `IsTutorialInProgress` events in `Objectives`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.tutorials.objectives.istutorialinprogress", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.tutorials.objectives.istutorialinprogress", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.tutorials.objectives.istutorialinprogress")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.tutorials.objectives.istutorialinprogress", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.tutorials.objectives.istutorialinprogress", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.tutorials.objectives.istutorialinprogress", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
