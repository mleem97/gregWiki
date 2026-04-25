---
title: LockedCursorForPlayerMovement
description: Documentation for greg.PLAYER.LockedCursorForPlayerMovement
path: /api/hooks/player/lockedcursorforplayermovement
---

# LockedCursorForPlayerMovement

> **Hook ID:** `greg.PLAYER.LockedCursorForPlayerMovement`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerManager.LockedCursorForPlayerMovement

## Native Signature
```csharp
Il2Cpp.PlayerManager::LockedCursorForPlayerMovement()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LockedCursorForPlayerMovement` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.LockedCursorForPlayerMovement", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.LockedCursorForPlayerMovement");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.LockedCursorForPlayerMovement", function(payload)
    greg.log("Hook greg.PLAYER.LockedCursorForPlayerMovement received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.LockedCursorForPlayerMovement fired")

greg.on("greg.PLAYER.LockedCursorForPlayerMovement", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.LockedCursorForPlayerMovement", (payload) => {
    console.log("Hook greg.PLAYER.LockedCursorForPlayerMovement triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.LockedCursorForPlayerMovement".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.LockedCursorForPlayerMovement", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.LockedCursorForPlayerMovement fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
