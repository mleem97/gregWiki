---
title: OSK_UI_InputReceiver.OnFocusLost
description: Hook event for OSK_UI_InputReceiver.OnFocusLost
path: /api/hooks/visualui/osk_ui_-input-receiver-on-focus-lost
---

# OSK_UI_InputReceiver.OnFocusLost

> **Hook ID:** `greg.visualui.osk_ui_inputreceiver.onfocuslost`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_InputReceiver.OnFocusLost()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnFocusLost()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnFocusLost` events in `OSK_UI_InputReceiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_inputreceiver.onfocuslost", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_inputreceiver.onfocuslost", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_inputreceiver.onfocuslost")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_inputreceiver.onfocuslost", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_inputreceiver.onfocuslost", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_inputreceiver.onfocuslost", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
