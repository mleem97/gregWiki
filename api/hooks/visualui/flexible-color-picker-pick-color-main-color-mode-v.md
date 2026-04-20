---
title: FlexibleColorPicker.PickColorMain
description: Hook event for FlexibleColorPicker.PickColorMain
path: /api/hooks/visualui/flexible-color-picker-pick-color-main-color-mode-v
---

# FlexibleColorPicker.PickColorMain

> **Hook ID:** `greg.visualui.flexiblecolorpicker.pickcolormain`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.PickColorMain()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
BufferedColor PickColorMain(BufferedColor color, MainPickingMode mode, Vector2 v)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `color` | `BufferedColor` | ... |
| `mode` | `MainPickingMode` | ... |
| `v` | `Vector2` | ... |


## Using this Hook

::: tip
Use this hook to react to `PickColorMain` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.pickcolormain", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.pickcolormain", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.pickcolormain")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.pickcolormain", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.pickcolormain", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.pickcolormain", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `BufferedColor`
- **Safe to block?**: Yes
