---
title: LeanTweenUIElement.TweenVertical
description: Hook event for LeanTweenUIElement.TweenVertical
path: /api/hooks/visualui/lean-tween-ui-element-tween-vertical
---

# LeanTweenUIElement.TweenVertical

> **Hook ID:** `greg.visualui.leantweenuielement.tweenvertical`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LeanTweenUIElement.TweenVertical()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void TweenVertical(Boolean leanout)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `leanout` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `TweenVertical` events in `LeanTweenUIElement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.leantweenuielement.tweenvertical", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.leantweenuielement.tweenvertical", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.leantweenuielement.tweenvertical")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.leantweenuielement.tweenvertical", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.leantweenuielement.tweenvertical", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.leantweenuielement.tweenvertical", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
