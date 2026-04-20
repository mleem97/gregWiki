---
title: FlexibleColorPicker.GetNormWorldSpace
description: Hook event for FlexibleColorPicker.GetNormWorldSpace
path: /api/hooks/visualui/flexible-color-picker-get-norm-world-space
---

# FlexibleColorPicker.GetNormWorldSpace

> **Hook ID:** `greg.visualui.flexiblecolorpicker.getnormworldspace`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.GetNormWorldSpace()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector2 GetNormWorldSpace(Canvas canvas, RectTransform rect, BaseEventData e)
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
Use this hook to react to `GetNormWorldSpace` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.getnormworldspace", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.getnormworldspace", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.getnormworldspace")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.getnormworldspace", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.getnormworldspace", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.getnormworldspace", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2`
- **Safe to block?**: Yes
