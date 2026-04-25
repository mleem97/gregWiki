---
title: FlexibleColorPicker.GetSanitizedHex
description: Hook event for FlexibleColorPicker.GetSanitizedHex
path: /api/hooks/visualui/flexible-color-picker-get-sanitized-hex
---

# FlexibleColorPicker.GetSanitizedHex

> **Hook ID:** `greg.visualui.flexiblecolorpicker.getsanitizedhex`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.GetSanitizedHex()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GetSanitizedHex(String input, Boolean full)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `input` | `String` | ... |
| `full` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetSanitizedHex` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.getsanitizedhex", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.getsanitizedhex", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.getsanitizedhex")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.getsanitizedhex", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.getsanitizedhex", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.getsanitizedhex", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
