---
title: MusicVolumeSet
description: Documentation for greg.SYSTEM.MusicVolumeSet
path: /api/hooks/system/musicvolumeset
---

# MusicVolumeSet

> **Hook ID:** `greg.SYSTEM.MusicVolumeSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AudioManager.SetMusicVolume

## Native Signature
```csharp
Il2Cpp.AudioManager::SetMusicVolume(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MusicVolumeSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MusicVolumeSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MusicVolumeSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MusicVolumeSet", function(payload)
    greg.log("Hook greg.SYSTEM.MusicVolumeSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MusicVolumeSet fired")

greg.on("greg.SYSTEM.MusicVolumeSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MusicVolumeSet", (payload) => {
    console.log("Hook greg.SYSTEM.MusicVolumeSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MusicVolumeSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MusicVolumeSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MusicVolumeSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
