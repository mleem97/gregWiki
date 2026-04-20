---
title: FlexibleColorPicker.GetNormalizedPointerPosition
description: Hook event for FlexibleColorPicker.GetNormalizedPointerPosition
path: /api/hooks/visualui/flexible-color-picker-get-normalized-pointer-position
---

# FlexibleColorPicker.GetNormalizedPointerPosition

> **Hook ID:** `greg.visualui.flexiblecolorpicker.getnormalizedpointerposition`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.GetNormalizedPointerPosition()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector2 GetNormalizedPointerPosition(Canvas canvas, RectTransform rect, BaseEventData e)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `canvas` | `Canvas` | ... |
| `rect` | `RectTransform` | ... |
| `e` | `BaseEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetNormalizedPointerPosition` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.getnormalizedpointerposition", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.getnormalizedpointerposition", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.getnormalizedpointerposition")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.getnormalizedpointerposition", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.getnormalizedpointerposition", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.getnormalizedpointerposition", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2`
- **Safe to block?**: Yes
