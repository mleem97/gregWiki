---
title: MoneyChanged
description: Documentation for greg.PLAYER.MoneyChanged
path: /api/hooks/player/moneychanged
---

# MoneyChanged

> **Hook ID:** `greg.PLAYER.MoneyChanged`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Player.UpdateCoin

## Native Signature
```csharp
Il2Cpp.Player::UpdateCoin(float, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `coinChangeAmount` | `float` | ... |
| `withoutSound` | `bool` | ... |
| `newBalance` | `float` | ... |
| `accepted` | `bool` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MoneyChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.MoneyChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.MoneyChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.MoneyChanged", function(payload)
    greg.log("Hook greg.PLAYER.MoneyChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.MoneyChanged fired")

greg.on("greg.PLAYER.MoneyChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.MoneyChanged", (payload) => {
    console.log("Hook greg.PLAYER.MoneyChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.MoneyChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.MoneyChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.MoneyChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
