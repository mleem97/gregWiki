---
title: OSK_Keyboard.ClickSound
description: Hook event for OSK_Keyboard.ClickSound
path: /api/hooks/audio/osk_-keyboard-click-sound
---

# OSK_Keyboard.ClickSound

> **Hook ID:** `greg.audio.osk_keyboard.clicksound`
> **Category:** Audio
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.ClickSound()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ClickSound(Int32 keytypecode)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `keytypecode` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ClickSound` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.osk_keyboard.clicksound", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.osk_keyboard.clicksound", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.osk_keyboard.clicksound")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.osk_keyboard.clicksound", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.osk_keyboard.clicksound", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.osk_keyboard.clicksound", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
