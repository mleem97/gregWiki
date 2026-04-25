---
title: FlexibleColorPicker.GetNormScreenSpace
description: Hook event for FlexibleColorPicker.GetNormScreenSpace
path: /api/hooks/visualui/flexible-color-picker-get-norm-screen-space
---

# FlexibleColorPicker.GetNormScreenSpace

> **Hook ID:** `greg.visualui.flexiblecolorpicker.getnormscreenspace`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.GetNormScreenSpace()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector2 GetNormScreenSpace(RectTransform rect, BaseEventData e)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `rect` | `RectTransform` | ... |
| `e` | `BaseEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetNormScreenSpace` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.getnormscreenspace", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.getnormscreenspace", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.getnormscreenspace")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.getnormscreenspace", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.getnormscreenspace", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.getnormscreenspace", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2`
- **Safe to block?**: Yes
