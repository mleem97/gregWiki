---
title: XpChanged
description: Documentation for greg.PLAYER.XpChanged
path: /api/hooks/player/xpchanged
---

# XpChanged

> **Hook ID:** `greg.PLAYER.XpChanged`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Player.UpdateXP

## Native Signature
```csharp
Il2Cpp.Player::UpdateXP(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `amount` | `float` | ... |
| `xp` | `float` | ... |
| `accepted` | `bool` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `XpChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.XpChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.XpChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.XpChanged", function(payload)
    greg.log("Hook greg.PLAYER.XpChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.XpChanged fired")

greg.on("greg.PLAYER.XpChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.XpChanged", (payload) => {
    console.log("Hook greg.PLAYER.XpChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.XpChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.XpChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.XpChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
