---
title: FlexibleColorPicker.PickColor1D
description: Hook event for FlexibleColorPicker.PickColor1D
path: /api/hooks/visualui/flexible-color-picker-pick-color1-d-color-type-value
---

# FlexibleColorPicker.PickColor1D

> **Hook ID:** `greg.visualui.flexiblecolorpicker.pickcolor1d`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.PickColor1D()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
BufferedColor PickColor1D(BufferedColor color, PickerType type, Single value)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `color` | `BufferedColor` | ... |
| `type` | `PickerType` | ... |
| `value` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `PickColor1D` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.pickcolor1d", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.pickcolor1d", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.pickcolor1d")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.pickcolor1d", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.pickcolor1d", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.pickcolor1d", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `BufferedColor`
- **Safe to block?**: Yes
