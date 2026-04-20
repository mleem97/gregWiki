---
title: FlexibleColorPicker.GetMarker
description: Hook event for FlexibleColorPicker.GetMarker
path: /api/hooks/visualui/flexible-color-picker-get-marker
---

# FlexibleColorPicker.GetMarker

> **Hook ID:** `greg.visualui.flexiblecolorpicker.getmarker`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FlexibleColorPicker.GetMarker()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
RectTransform GetMarker(Image picker, String search)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `picker` | `Image` | ... |
| `search` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetMarker` events in `FlexibleColorPicker`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.flexiblecolorpicker.getmarker", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.flexiblecolorpicker.getmarker", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.flexiblecolorpicker.getmarker")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.flexiblecolorpicker.getmarker", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.flexiblecolorpicker.getmarker", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.flexiblecolorpicker.getmarker", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `RectTransform`
- **Safe to block?**: Yes
