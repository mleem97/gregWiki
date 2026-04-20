---
title: FlexibleColorPicker.PickColor2D
description: Hook event for FlexibleColorPicker.PickColor2D
path: /api/hooks/visualui/flexible-color-picker-pick-color2-d
---

# FlexibleColorPicker.PickColor2D

> **Hook ID:** `greg.visualui.flexiblecolorpicker.pickcolor2d`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.PickColor2D()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
BufferedColor PickColor2D(BufferedColor color, PickerType type1, Single value1, PickerType type2, Single value2)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `color` | `BufferedColor` | ... |
| `type1` | `PickerType` | ... |
| `value1` | `Single` | ... |
| `type2` | `PickerType` | ... |
| `value2` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `PickColor2D` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.pickcolor2d", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.pickcolor2d", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.pickcolor2d")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.pickcolor2d", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.pickcolor2d", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.pickcolor2d", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `BufferedColor`
- **Safe to block?**: Yes
