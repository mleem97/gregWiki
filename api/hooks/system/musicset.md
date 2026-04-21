---
title: MusicSet
description: Documentation for greg.SYSTEM.MusicSet
path: /api/hooks/system/musicset
---

# MusicSet

> **Hook ID:** `greg.SYSTEM.MusicSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AudioManager.SetMusic

## Native Signature
```csharp
Il2Cpp.AudioManager::SetMusic(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MusicSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MusicSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MusicSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MusicSet", function(payload)
    greg.log("Hook greg.SYSTEM.MusicSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MusicSet fired")

greg.on("greg.SYSTEM.MusicSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MusicSet", (payload) => {
    console.log("Hook greg.SYSTEM.MusicSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MusicSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MusicSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MusicSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
