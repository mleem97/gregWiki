---
title: AudioManager.SetMusicVolume
description: Hook event for AudioManager.SetMusicVolume
path: /api/hooks/audio/audio-manager-set-music-volume
---

# AudioManager.SetMusicVolume

> **Hook ID:** `greg.audio.audiomanager.setmusicvolume`
> **Category:** Audio
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AudioManager.SetMusicVolume()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetMusicVolume(Single _volume)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_volume` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetMusicVolume` events in `AudioManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.audiomanager.setmusicvolume", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.audiomanager.setmusicvolume", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.audiomanager.setmusicvolume")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.audiomanager.setmusicvolume", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.audiomanager.setmusicvolume", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.audiomanager.setmusicvolume", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
