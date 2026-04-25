---
title: FlexibleColorPicker.HSVToRGB
description: Hook event for FlexibleColorPicker.HSVToRGB
path: /api/hooks/visualui/flexible-color-picker-hsv-to-rgb-h-s-v
---

# FlexibleColorPicker.HSVToRGB

> **Hook ID:** `greg.visualui.flexiblecolorpicker.hsvtorgb`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.HSVToRGB()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Color HSVToRGB(Single h, Single s, Single v)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `h` | `Single` | ... |
| `s` | `Single` | ... |
| `v` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `HSVToRGB` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.hsvtorgb", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.hsvtorgb", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.hsvtorgb")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.hsvtorgb", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.hsvtorgb", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.hsvtorgb", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Color`
- **Safe to block?**: Yes
