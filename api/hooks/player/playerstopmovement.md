---
title: PlayerStopMovement
description: Documentation for greg.PLAYER.PlayerStopMovement
path: /api/hooks/player/playerstopmovement
---

# PlayerStopMovement

> **Hook ID:** `greg.PLAYER.PlayerStopMovement`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerManager.PlayerStopMovement

## Native Signature
```csharp
Il2Cpp.PlayerManager::PlayerStopMovement()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlayerStopMovement` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.PlayerStopMovement", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.PlayerStopMovement");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.PlayerStopMovement", function(payload)
    greg.log("Hook greg.PLAYER.PlayerStopMovement received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.PlayerStopMovement fired")

greg.on("greg.PLAYER.PlayerStopMovement", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.PlayerStopMovement", (payload) => {
    console.log("Hook greg.PLAYER.PlayerStopMovement triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.PlayerStopMovement".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.PlayerStopMovement", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.PlayerStopMovement fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
