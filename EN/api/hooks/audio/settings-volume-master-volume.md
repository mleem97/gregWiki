---
title: SettingsVolume.MasterVolume
description: Hook event for SettingsVolume.MasterVolume
path: /api/hooks/audio/settings-volume-master-volume
---

# SettingsVolume.MasterVolume

> **Hook ID:** `greg.audio.settingsvolume.mastervolume`
> **Category:** Audio
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsVolume.MasterVolume()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void MasterVolume(Single volume)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `volume` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `MasterVolume` events in `SettingsVolume`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.settingsvolume.mastervolume", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.settingsvolume.mastervolume", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.settingsvolume.mastervolume")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.settingsvolume.mastervolume", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.settingsvolume.mastervolume", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.settingsvolume.mastervolume", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
