---
title: OSK_UI_InputReceiver.ToggleCharMask
description: Hook event for OSK_UI_InputReceiver.ToggleCharMask
path: /api/hooks/visualui/osk_ui_-input-receiver-toggle-char-mask
---

# OSK_UI_InputReceiver.ToggleCharMask

> **Hook ID:** `greg.visualui.osk_ui_inputreceiver.togglecharmask`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_InputReceiver.ToggleCharMask()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ToggleCharMask(Boolean on_off_charmask)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `on_off_charmask` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `ToggleCharMask` events in `OSK_UI_InputReceiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_inputreceiver.togglecharmask", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_inputreceiver.togglecharmask", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_inputreceiver.togglecharmask")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_inputreceiver.togglecharmask", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_inputreceiver.togglecharmask", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_inputreceiver.togglecharmask", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
