---
title: MusicPlayer.PlayRandomSong
description: Hook event for MusicPlayer.PlayRandomSong
path: /api/hooks/economy/music-player-play-random-song
---

# MusicPlayer.PlayRandomSong

> **Hook ID:** `greg.economy.musicplayer.playrandomsong`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MusicPlayer.PlayRandomSong()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlayRandomSong()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `PlayRandomSong` events in `MusicPlayer`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.musicplayer.playrandomsong", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.musicplayer.playrandomsong", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.musicplayer.playrandomsong")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.musicplayer.playrandomsong", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.musicplayer.playrandomsong", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.musicplayer.playrandomsong", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
