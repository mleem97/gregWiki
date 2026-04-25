---
title: LeanTweenUIElement.TweenScaleInOut
description: Hook event for LeanTweenUIElement.TweenScaleInOut
path: /api/hooks/visualui/lean-tween-ui-element-tween-scale-in-out
---

# LeanTweenUIElement.TweenScaleInOut

> **Hook ID:** `greg.visualui.leantweenuielement.tweenscaleinout`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LeanTweenUIElement.TweenScaleInOut()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator TweenScaleInOut()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TweenScaleInOut` events in `LeanTweenUIElement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.leantweenuielement.tweenscaleinout", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.leantweenuielement.tweenscaleinout", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.leantweenuielement.tweenscaleinout")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.leantweenuielement.tweenscaleinout", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.leantweenuielement.tweenscaleinout", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.leantweenuielement.tweenscaleinout", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
