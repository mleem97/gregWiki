---
title: OSK_Keyboard.GamepadInput_Horizontal
description: Hook event for OSK_Keyboard.GamepadInput_Horizontal
path: /api/hooks/character/osk_-keyboard-gamepad-input_-horizontal
---

# OSK_Keyboard.GamepadInput_Horizontal

> **Hook ID:** `greg.character.osk_keyboard.gamepadinput_horizontal`
> **Category:** Character
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.GamepadInput_Horizontal()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void GamepadInput_Horizontal(Single f)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `f` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `GamepadInput_Horizontal` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.osk_keyboard.gamepadinput_horizontal", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.osk_keyboard.gamepadinput_horizontal", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.osk_keyboard.gamepadinput_horizontal")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.osk_keyboard.gamepadinput_horizontal", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.osk_keyboard.gamepadinput_horizontal", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.osk_keyboard.gamepadinput_horizontal", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
