---
title: FlexibleColorPicker.UpdateMarker
description: Hook event for FlexibleColorPicker.UpdateMarker
path: /api/hooks/visualui/flexible-color-picker-update-marker
---

# FlexibleColorPicker.UpdateMarker

> **Hook ID:** `greg.visualui.flexiblecolorpicker.updatemarker`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.UpdateMarker()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateMarker(Picker picker, PickerType type, Vector2 v)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `picker` | `Picker` | ... |
| `type` | `PickerType` | ... |
| `v` | `Vector2` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateMarker` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.updatemarker", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.updatemarker", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.updatemarker")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.updatemarker", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.updatemarker", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.updatemarker", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
