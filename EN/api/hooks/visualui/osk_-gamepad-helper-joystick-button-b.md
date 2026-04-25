---
title: OSK_GamepadHelper.JoystickButtonB
description: Hook event for OSK_GamepadHelper.JoystickButtonB
path: /api/hooks/visualui/osk_-gamepad-helper-joystick-button-b
---

# OSK_GamepadHelper.JoystickButtonB

> **Hook ID:** `greg.visualui.osk_gamepadhelper.joystickbuttonb`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GamepadHelper.JoystickButtonB()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean JoystickButtonB()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `JoystickButtonB` events in `OSK_GamepadHelper`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_gamepadhelper.joystickbuttonb", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_gamepadhelper.joystickbuttonb", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_gamepadhelper.joystickbuttonb")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_gamepadhelper.joystickbuttonb", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_gamepadhelper.joystickbuttonb", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_gamepadhelper.joystickbuttonb", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
