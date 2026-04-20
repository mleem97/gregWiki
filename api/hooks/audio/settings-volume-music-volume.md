---
title: SettingsVolume.MusicVolume
description: Hook event for SettingsVolume.MusicVolume
path: /api/hooks/audio/settings-volume-music-volume
---

# SettingsVolume.MusicVolume

> **Hook ID:** `greg.audio.settingsvolume.musicvolume`
> **Category:** Audio
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsVolume.MusicVolume()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void MusicVolume(Single volume)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `volume` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `MusicVolume` events in `SettingsVolume`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.settingsvolume.musicvolume", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.settingsvolume.musicvolume", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.settingsvolume.musicvolume")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.settingsvolume.musicvolume", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.settingsvolume.musicvolume", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.settingsvolume.musicvolume", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
