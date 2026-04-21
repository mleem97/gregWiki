---
title: PlayRandomSong
description: Documentation for greg.SYSTEM.PlayRandomSong
path: /api/hooks/system/playrandomsong
---

# PlayRandomSong

> **Hook ID:** `greg.SYSTEM.PlayRandomSong`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MusicPlayer.PlayRandomSong

## Native Signature
```csharp
Il2Cpp.MusicPlayer::PlayRandomSong()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlayRandomSong` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PlayRandomSong", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PlayRandomSong");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PlayRandomSong", function(payload)
    greg.log("Hook greg.SYSTEM.PlayRandomSong received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PlayRandomSong fired")

greg.on("greg.SYSTEM.PlayRandomSong", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PlayRandomSong", (payload) => {
    console.log("Hook greg.SYSTEM.PlayRandomSong triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PlayRandomSong".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PlayRandomSong", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PlayRandomSong fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
