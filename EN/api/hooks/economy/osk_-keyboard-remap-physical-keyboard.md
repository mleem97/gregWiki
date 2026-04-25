---
title: OSK_Keyboard.RemapPhysicalKeyboard
description: Hook event for OSK_Keyboard.RemapPhysicalKeyboard
path: /api/hooks/economy/osk_-keyboard-remap-physical-keyboard
---

# OSK_Keyboard.RemapPhysicalKeyboard

> **Hook ID:** `greg.economy.osk_keyboard.remapphysicalkeyboard`
> **Category:** Economy
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.RemapPhysicalKeyboard()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemapPhysicalKeyboard()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RemapPhysicalKeyboard` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.osk_keyboard.remapphysicalkeyboard", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.osk_keyboard.remapphysicalkeyboard", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.osk_keyboard.remapphysicalkeyboard")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.osk_keyboard.remapphysicalkeyboard", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.osk_keyboard.remapphysicalkeyboard", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.osk_keyboard.remapphysicalkeyboard", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
