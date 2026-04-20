---
title: AudioManager.PlayEffectAudioClip
description: Hook event for AudioManager.PlayEffectAudioClip
path: /api/hooks/networking/audio-manager-play-effect-audio-clip
---

# AudioManager.PlayEffectAudioClip

> **Hook ID:** `greg.networking.audiomanager.playeffectaudioclip`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AudioManager.PlayEffectAudioClip()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlayEffectAudioClip(AudioClip audioClip, Single volume, Single delayed)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `audioClip` | `AudioClip` | ... |
| `volume` | `Single` | ... |
| `delayed` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `PlayEffectAudioClip` events in `AudioManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.audiomanager.playeffectaudioclip", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.audiomanager.playeffectaudioclip", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.audiomanager.playeffectaudioclip")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.audiomanager.playeffectaudioclip", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.audiomanager.playeffectaudioclip", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.audiomanager.playeffectaudioclip", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
