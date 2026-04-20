---
title: OSK_Key.JoystickPressUp
description: Hook event for OSK_Key.JoystickPressUp
path: /api/hooks/visualui/osk_-key-joystick-press-up
---

# OSK_Key.JoystickPressUp

> **Hook ID:** `greg.visualui.osk_key.joystickpressup`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Key.JoystickPressUp()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void JoystickPressUp(OSK_Receiver inputfield)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `inputfield` | `OSK_Receiver` | ... |


## Using this Hook

::: tip
Use this hook to react to `JoystickPressUp` events in `OSK_Key`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_key.joystickpressup", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_key.joystickpressup", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_key.joystickpressup")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_key.joystickpressup", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_key.joystickpressup", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_key.joystickpressup", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
