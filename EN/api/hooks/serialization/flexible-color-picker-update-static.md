---
title: FlexibleColorPicker.UpdateStatic
description: Hook event for FlexibleColorPicker.UpdateStatic
path: /api/hooks/serialization/flexible-color-picker-update-static
---

# FlexibleColorPicker.UpdateStatic

> **Hook ID:** `greg.serialization.flexiblecolorpicker.updatestatic`
> **Category:** Serialization
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.UpdateStatic()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateStatic(PickerType type)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `type` | `PickerType` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateStatic` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.serialization.flexiblecolorpicker.updatestatic", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.serialization.flexiblecolorpicker.updatestatic", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.serialization.flexiblecolorpicker.updatestatic")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.serialization.flexiblecolorpicker.updatestatic", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.serialization.flexiblecolorpicker.updatestatic", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.serialization.flexiblecolorpicker.updatestatic", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
