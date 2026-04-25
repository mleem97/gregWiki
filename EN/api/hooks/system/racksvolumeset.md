---
title: RacksVolumeSet
description: Documentation for greg.SYSTEM.RacksVolumeSet
path: /api/hooks/system/racksvolumeset
---

# RacksVolumeSet

> **Hook ID:** `greg.SYSTEM.RacksVolumeSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AudioManager.SetRacksVolume

## Native Signature
```csharp
Il2Cpp.AudioManager::SetRacksVolume(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RacksVolumeSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RacksVolumeSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RacksVolumeSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RacksVolumeSet", function(payload)
    greg.log("Hook greg.SYSTEM.RacksVolumeSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RacksVolumeSet fired")

greg.on("greg.SYSTEM.RacksVolumeSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RacksVolumeSet", (payload) => {
    console.log("Hook greg.SYSTEM.RacksVolumeSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RacksVolumeSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RacksVolumeSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RacksVolumeSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
