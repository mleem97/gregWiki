---
title: FlexibleColorPicker.GetColorFullAlpha
description: Hook event for FlexibleColorPicker.GetColorFullAlpha
path: /api/hooks/visualui/flexible-color-picker-get-color-full-alpha
---

# FlexibleColorPicker.GetColorFullAlpha

> **Hook ID:** `greg.visualui.flexiblecolorpicker.getcolorfullalpha`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.GetColorFullAlpha()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Color GetColorFullAlpha()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetColorFullAlpha` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.getcolorfullalpha", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.getcolorfullalpha", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.getcolorfullalpha")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.getcolorfullalpha", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.getcolorfullalpha", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.getcolorfullalpha", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Color`
- **Safe to block?**: Yes
