---
title: CallbacksSet
description: Documentation for greg.PLAYER.CallbacksSet
path: /api/hooks/player/callbacksset
---

# CallbacksSet

> **Hook ID:** `greg.PLAYER.CallbacksSet`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerActions.SetCallbacks

## Native Signature
```csharp
Il2Cpp.PlayerActions::SetCallbacks(InputController.IPlayerActions)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CallbacksSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.CallbacksSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.CallbacksSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.CallbacksSet", function(payload)
    greg.log("Hook greg.PLAYER.CallbacksSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.CallbacksSet fired")

greg.on("greg.PLAYER.CallbacksSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.CallbacksSet", (payload) => {
    console.log("Hook greg.PLAYER.CallbacksSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.CallbacksSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.CallbacksSet", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.CallbacksSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
