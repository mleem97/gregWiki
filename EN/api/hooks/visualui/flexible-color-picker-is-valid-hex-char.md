---
title: FlexibleColorPicker.IsValidHexChar
description: Hook event for FlexibleColorPicker.IsValidHexChar
path: /api/hooks/visualui/flexible-color-picker-is-valid-hex-char
---

# FlexibleColorPicker.IsValidHexChar

> **Hook ID:** `greg.visualui.flexiblecolorpicker.isvalidhexchar`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.IsValidHexChar()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsValidHexChar(Char c)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `c` | `Char` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsValidHexChar` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.isvalidhexchar", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.isvalidhexchar", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.isvalidhexchar")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.isvalidhexchar", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.isvalidhexchar", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.isvalidhexchar", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
