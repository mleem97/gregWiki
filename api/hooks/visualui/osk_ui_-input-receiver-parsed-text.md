---
title: OSK_UI_InputReceiver.ParsedText
description: Hook event for OSK_UI_InputReceiver.ParsedText
path: /api/hooks/visualui/osk_ui_-input-receiver-parsed-text
---

# OSK_UI_InputReceiver.ParsedText

> **Hook ID:** `greg.visualui.osk_ui_inputreceiver.parsedtext`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_InputReceiver.ParsedText()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String ParsedText()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ParsedText` events in `OSK_UI_InputReceiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_inputreceiver.parsedtext", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_inputreceiver.parsedtext", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_inputreceiver.parsedtext")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_inputreceiver.parsedtext", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_inputreceiver.parsedtext", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_inputreceiver.parsedtext", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
