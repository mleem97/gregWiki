---
title: FlexibleColorPicker.SetMarker
description: Hook event for FlexibleColorPicker.SetMarker
path: /api/hooks/visualui/flexible-color-picker-set-marker
---

# FlexibleColorPicker.SetMarker

> **Hook ID:** `greg.visualui.flexiblecolorpicker.setmarker`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.SetMarker()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetMarker(Image picker, Vector2 v, Boolean setX, Boolean setY)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `picker` | `Image` | ... |
| `v` | `Vector2` | ... |
| `setX` | `Boolean` | ... |
| `setY` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetMarker` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.setmarker", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.setmarker", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.setmarker")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.setmarker", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.setmarker", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.setmarker", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
