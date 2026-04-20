---
title: OSK_Keyboard.GamepadInput_Cancel
description: Hook event for OSK_Keyboard.GamepadInput_Cancel
path: /api/hooks/character/osk_-keyboard-gamepad-input_-cancel
---

# OSK_Keyboard.GamepadInput_Cancel

> **Hook ID:** `greg.character.osk_keyboard.gamepadinput_cancel`
> **Category:** Character
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.GamepadInput_Cancel()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void GamepadInput_Cancel()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GamepadInput_Cancel` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.osk_keyboard.gamepadinput_cancel", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.osk_keyboard.gamepadinput_cancel", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.osk_keyboard.gamepadinput_cancel")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.osk_keyboard.gamepadinput_cancel", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.osk_keyboard.gamepadinput_cancel", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.osk_keyboard.gamepadinput_cancel", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
