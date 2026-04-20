---
title: ObjectiveObject.PlayUIEffectDisolve
description: Hook event for ObjectiveObject.PlayUIEffectDisolve
path: /api/hooks/visualui/objective-object-play-ui-effect-disolve
---

# ObjectiveObject.PlayUIEffectDisolve

> **Hook ID:** `greg.visualui.objectiveobject.playuieffectdisolve`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ObjectiveObject.PlayUIEffectDisolve()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlayUIEffectDisolve()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `PlayUIEffectDisolve` events in `ObjectiveObject`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.objectiveobject.playuieffectdisolve", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.objectiveobject.playuieffectdisolve", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.objectiveobject.playuieffectdisolve")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.objectiveobject.playuieffectdisolve", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.objectiveobject.playuieffectdisolve", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.objectiveobject.playuieffectdisolve", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
