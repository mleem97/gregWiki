---
title: OSK_UI_Key.GetLayoutLocation
description: Hook event for OSK_UI_Key.GetLayoutLocation
path: /api/hooks/visualui/osk_ui_-key-get-layout-location
---

# OSK_UI_Key.GetLayoutLocation

> **Hook ID:** `greg.visualui.osk_ui_key.getlayoutlocation`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_Key.GetLayoutLocation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector2Int GetLayoutLocation()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetLayoutLocation` events in `OSK_UI_Key`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_key.getlayoutlocation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_key.getlayoutlocation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_key.getlayoutlocation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_key.getlayoutlocation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_key.getlayoutlocation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_key.getlayoutlocation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2Int`
- **Safe to block?**: Yes
