---
title: SettingsVolume.RacksVolume
description: Hook event for SettingsVolume.RacksVolume
path: /api/hooks/audio/settings-volume-racks-volume
---

# SettingsVolume.RacksVolume

> **Hook ID:** `greg.audio.settingsvolume.racksvolume`
> **Category:** Audio
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsVolume.RacksVolume()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RacksVolume(Single volume)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `volume` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `RacksVolume` events in `SettingsVolume`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.settingsvolume.racksvolume", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.settingsvolume.racksvolume", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.settingsvolume.racksvolume")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.settingsvolume.racksvolume", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.settingsvolume.racksvolume", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.settingsvolume.racksvolume", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
