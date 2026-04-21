---
title: EffectsVolumeSet
description: Documentation for greg.SYSTEM.EffectsVolumeSet
path: /api/hooks/system/effectsvolumeset
---

# EffectsVolumeSet

> **Hook ID:** `greg.SYSTEM.EffectsVolumeSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AudioManager.SetEffectsVolume

## Native Signature
```csharp
Il2Cpp.AudioManager::SetEffectsVolume(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `EffectsVolumeSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.EffectsVolumeSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.EffectsVolumeSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.EffectsVolumeSet", function(payload)
    greg.log("Hook greg.SYSTEM.EffectsVolumeSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.EffectsVolumeSet fired")

greg.on("greg.SYSTEM.EffectsVolumeSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.EffectsVolumeSet", (payload) => {
    console.log("Hook greg.SYSTEM.EffectsVolumeSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.EffectsVolumeSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.EffectsVolumeSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.EffectsVolumeSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
