---
title: CallbacksAdded
description: Documentation for greg.PLAYER.CallbacksAdded
path: /api/hooks/player/callbacksadded
---

# CallbacksAdded

> **Hook ID:** `greg.PLAYER.CallbacksAdded`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerActions.AddCallbacks

## Native Signature
```csharp
Il2Cpp.PlayerActions::AddCallbacks(InputController.IPlayerActions)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CallbacksAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.CallbacksAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.CallbacksAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.CallbacksAdded", function(payload)
    greg.log("Hook greg.PLAYER.CallbacksAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.CallbacksAdded fired")

greg.on("greg.PLAYER.CallbacksAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.CallbacksAdded", (payload) => {
    console.log("Hook greg.PLAYER.CallbacksAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.CallbacksAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.CallbacksAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.CallbacksAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
