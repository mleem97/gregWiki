---
title: OSK_UI_Cursor.OnDisable
description: Hook event for OSK_UI_Cursor.OnDisable
path: /api/hooks/visualui/osk_ui_-cursor-on-disable
---

# OSK_UI_Cursor.OnDisable

> **Hook ID:** `greg.visualui.osk_ui_cursor.ondisable`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_Cursor.OnDisable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnDisable()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnDisable` events in `OSK_UI_Cursor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_cursor.ondisable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_cursor.ondisable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_cursor.ondisable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_cursor.ondisable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_cursor.ondisable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_cursor.ondisable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
