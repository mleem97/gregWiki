---
title: Warped
description: Documentation for greg.PLAYER.Warped
path: /api/hooks/player/warped
---

# Warped

> **Hook ID:** `greg.PLAYER.Warped`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Player.WarpPlayer

## Native Signature
```csharp
Il2Cpp.Player::WarpPlayer(Vector3, Quaternion)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `position` | `Vector3` | ... |
| `rotation` | `Quaternion` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Warped` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.Warped", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.Warped");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.Warped", function(payload)
    greg.log("Hook greg.PLAYER.Warped received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.Warped fired")

greg.on("greg.PLAYER.Warped", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.Warped", (payload) => {
    console.log("Hook greg.PLAYER.Warped triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.Warped".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.Warped", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.Warped fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
