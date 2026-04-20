---
title: AudioManager.SetEffectsVolume
description: Hook event for AudioManager.SetEffectsVolume
path: /api/hooks/audio/audio-manager-set-effects-volume
---

# AudioManager.SetEffectsVolume

> **Hook ID:** `greg.audio.audiomanager.seteffectsvolume`
> **Category:** Audio
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AudioManager.SetEffectsVolume()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetEffectsVolume(Single _volume)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_volume` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetEffectsVolume` events in `AudioManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.audiomanager.seteffectsvolume", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.audiomanager.seteffectsvolume", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.audiomanager.seteffectsvolume")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.audiomanager.seteffectsvolume", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.audiomanager.seteffectsvolume", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.audiomanager.seteffectsvolume", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
