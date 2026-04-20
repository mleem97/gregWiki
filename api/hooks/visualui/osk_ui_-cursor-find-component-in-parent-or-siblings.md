---
title: OSK_UI_Cursor.FindComponentInParentOrSiblings
description: Hook event for OSK_UI_Cursor.FindComponentInParentOrSiblings
path: /api/hooks/visualui/osk_ui_-cursor-find-component-in-parent-or-siblings
---

# OSK_UI_Cursor.FindComponentInParentOrSiblings

> **Hook ID:** `greg.visualui.osk_ui_cursor.findcomponentinparentorsiblings`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_Cursor.FindComponentInParentOrSiblings()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
T FindComponentInParentOrSiblings()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `FindComponentInParentOrSiblings` events in `OSK_UI_Cursor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_cursor.findcomponentinparentorsiblings", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_cursor.findcomponentinparentorsiblings", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_cursor.findcomponentinparentorsiblings")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_cursor.findcomponentinparentorsiblings", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_cursor.findcomponentinparentorsiblings", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_cursor.findcomponentinparentorsiblings", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `T`
- **Safe to block?**: Yes
