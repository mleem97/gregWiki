---
title: SettingsVolume.EffectVolume
description: Hook event for SettingsVolume.EffectVolume
path: /api/hooks/audio/settings-volume-effect-volume
---

# SettingsVolume.EffectVolume

> **Hook ID:** `greg.audio.settingsvolume.effectvolume`
> **Category:** Audio
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsVolume.EffectVolume()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void EffectVolume(Single volume)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `volume` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `EffectVolume` events in `SettingsVolume`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.settingsvolume.effectvolume", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.settingsvolume.effectvolume", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.settingsvolume.effectvolume")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.settingsvolume.effectvolume", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.settingsvolume.effectvolume", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.settingsvolume.effectvolume", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
