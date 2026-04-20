---
title: ComputerShop.OpenColorPicker
description: Hook event for ComputerShop.OpenColorPicker
path: /api/hooks/visualui/computer-shop-open-color-picker
---

# ComputerShop.OpenColorPicker

> **Hook ID:** `greg.visualui.computershop.opencolorpicker`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.OpenColorPicker()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OpenColorPicker()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OpenColorPicker` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.computershop.opencolorpicker", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.computershop.opencolorpicker", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.computershop.opencolorpicker")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.computershop.opencolorpicker", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.computershop.opencolorpicker", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.computershop.opencolorpicker", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
