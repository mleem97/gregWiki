---
title: AudioManager.FadeOut_FadeIn
description: Hook event for AudioManager.FadeOut_FadeIn
path: /api/hooks/audio/audio-manager-fade-out_-fade-in
---

# AudioManager.FadeOut_FadeIn

> **Hook ID:** `greg.audio.audiomanager.fadeout_fadein`
> **Category:** Audio
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AudioManager.FadeOut_FadeIn()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator FadeOut_FadeIn(AudioSource audioSource, Single FadeTime, Single finalVolume, AudioClip newAudioClip)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `audioSource` | `AudioSource` | ... |
| `FadeTime` | `Single` | ... |
| `finalVolume` | `Single` | ... |
| `newAudioClip` | `AudioClip` | ... |


## Using this Hook

::: tip
Use this hook to react to `FadeOut_FadeIn` events in `AudioManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.audiomanager.fadeout_fadein", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.audiomanager.fadeout_fadein", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.audiomanager.fadeout_fadein")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.audiomanager.fadeout_fadein", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.audiomanager.fadeout_fadein", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.audiomanager.fadeout_fadein", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
