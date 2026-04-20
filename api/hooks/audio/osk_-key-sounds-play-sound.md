---
title: OSK_KeySounds.PlaySound
description: Hook event for OSK_KeySounds.PlaySound
path: /api/hooks/audio/osk_-key-sounds-play-sound
---

# OSK_KeySounds.PlaySound

> **Hook ID:** `greg.audio.osk_keysounds.playsound`
> **Category:** Audio
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_KeySounds.PlaySound()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlaySound(Int32 k)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `k` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `PlaySound` events in `OSK_KeySounds`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.osk_keysounds.playsound", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.osk_keysounds.playsound", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.osk_keysounds.playsound")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.osk_keysounds.playsound", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.osk_keysounds.playsound", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.osk_keysounds.playsound", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
