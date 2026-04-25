---
title: MasterVolumeSet
description: Documentation for greg.SYSTEM.MasterVolumeSet
path: /api/hooks/system/mastervolumeset
---

# MasterVolumeSet

> **Hook ID:** `greg.SYSTEM.MasterVolumeSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AudioManager.SetMasterVolume

## Native Signature
```csharp
Il2Cpp.AudioManager::SetMasterVolume(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MasterVolumeSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MasterVolumeSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MasterVolumeSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MasterVolumeSet", function(payload)
    greg.log("Hook greg.SYSTEM.MasterVolumeSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MasterVolumeSet fired")

greg.on("greg.SYSTEM.MasterVolumeSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MasterVolumeSet", (payload) => {
    console.log("Hook greg.SYSTEM.MasterVolumeSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MasterVolumeSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MasterVolumeSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MasterVolumeSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
