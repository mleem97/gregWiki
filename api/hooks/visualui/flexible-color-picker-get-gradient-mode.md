---
title: FlexibleColorPicker.GetGradientMode
description: Hook event for FlexibleColorPicker.GetGradientMode
path: /api/hooks/visualui/flexible-color-picker-get-gradient-mode
---

# FlexibleColorPicker.GetGradientMode

> **Hook ID:** `greg.visualui.flexiblecolorpicker.getgradientmode`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.GetGradientMode()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 GetGradientMode(PickerType type)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `type` | `PickerType` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetGradientMode` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.getgradientmode", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.getgradientmode", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.getgradientmode")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.getgradientmode", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.getgradientmode", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.getgradientmode", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
