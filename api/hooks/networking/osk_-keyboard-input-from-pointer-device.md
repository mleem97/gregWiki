---
title: OSK_Keyboard.InputFromPointerDevice
description: Hook event for OSK_Keyboard.InputFromPointerDevice
path: /api/hooks/networking/osk_-keyboard-input-from-pointer-device
---

# OSK_Keyboard.InputFromPointerDevice

> **Hook ID:** `greg.networking.osk_keyboard.inputfrompointerdevice`
> **Category:** Networking
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.InputFromPointerDevice()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InputFromPointerDevice()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `InputFromPointerDevice` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.osk_keyboard.inputfrompointerdevice", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.osk_keyboard.inputfrompointerdevice", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.osk_keyboard.inputfrompointerdevice")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.osk_keyboard.inputfrompointerdevice", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.osk_keyboard.inputfrompointerdevice", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.osk_keyboard.inputfrompointerdevice", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
