---
title: OSK_UI_Key.JoystickPressDown
description: Hook event for OSK_UI_Key.JoystickPressDown
path: /api/hooks/visualui/osk_ui_-key-joystick-press-down
---

# OSK_UI_Key.JoystickPressDown

> **Hook ID:** `greg.visualui.osk_ui_key.joystickpressdown`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_Key.JoystickPressDown()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void JoystickPressDown(OSK_Receiver inputfield)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `inputfield` | `OSK_Receiver` | ... |


## Using this Hook

::: tip
Use this hook to react to `JoystickPressDown` events in `OSK_UI_Key`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_key.joystickpressdown", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_key.joystickpressdown", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_key.joystickpressdown")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_key.joystickpressdown", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_key.joystickpressdown", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_key.joystickpressdown", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
