---
title: Loaded
description: Documentation for greg.PLAYER.Loaded
path: /api/hooks/player/loaded
---

# Loaded

> **Hook ID:** `greg.PLAYER.Loaded`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Player.LoadPlayer

## Native Signature
```csharp
Il2Cpp.Player::LoadPlayer(PlayerData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `data` | `PlayerData` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Loaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.Loaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.Loaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.Loaded", function(payload)
    greg.log("Hook greg.PLAYER.Loaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.Loaded fired")

greg.on("greg.PLAYER.Loaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.Loaded", (payload) => {
    console.log("Hook greg.PLAYER.Loaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.Loaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.Loaded", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.Loaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
