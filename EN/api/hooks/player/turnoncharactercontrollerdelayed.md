---
title: TurnOnCharacterControllerDelayed
description: Documentation for greg.PLAYER.TurnOnCharacterControllerDelayed
path: /api/hooks/player/turnoncharactercontrollerdelayed
---

# TurnOnCharacterControllerDelayed

> **Hook ID:** `greg.PLAYER.TurnOnCharacterControllerDelayed`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Player.TurnOnCharacterControllerDelayed

## Native Signature
```csharp
Il2Cpp.Player::TurnOnCharacterControllerDelayed()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TurnOnCharacterControllerDelayed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.TurnOnCharacterControllerDelayed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.TurnOnCharacterControllerDelayed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.TurnOnCharacterControllerDelayed", function(payload)
    greg.log("Hook greg.PLAYER.TurnOnCharacterControllerDelayed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.TurnOnCharacterControllerDelayed fired")

greg.on("greg.PLAYER.TurnOnCharacterControllerDelayed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.TurnOnCharacterControllerDelayed", (payload) => {
    console.log("Hook greg.PLAYER.TurnOnCharacterControllerDelayed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.TurnOnCharacterControllerDelayed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.TurnOnCharacterControllerDelayed", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.TurnOnCharacterControllerDelayed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
