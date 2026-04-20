---
title: FlexibleColorPicker.ShiftColor
description: Hook event for FlexibleColorPicker.ShiftColor
path: /api/hooks/visualui/flexible-color-picker-shift-color
---

# FlexibleColorPicker.ShiftColor

> **Hook ID:** `greg.visualui.flexiblecolorpicker.shiftcolor`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.ShiftColor()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShiftColor(Int32 type, Single delta)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `type` | `Int32` | ... |
| `delta` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShiftColor` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.shiftcolor", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.shiftcolor", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.shiftcolor")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.shiftcolor", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.shiftcolor", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.shiftcolor", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
