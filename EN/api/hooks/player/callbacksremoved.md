---
title: CallbacksRemoved
description: Documentation for greg.PLAYER.CallbacksRemoved
path: /api/hooks/player/callbacksremoved
---

# CallbacksRemoved

> **Hook ID:** `greg.PLAYER.CallbacksRemoved`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerActions.RemoveCallbacks

## Native Signature
```csharp
Il2Cpp.PlayerActions::RemoveCallbacks(InputController.IPlayerActions)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CallbacksRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.CallbacksRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.CallbacksRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.CallbacksRemoved", function(payload)
    greg.log("Hook greg.PLAYER.CallbacksRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.CallbacksRemoved fired")

greg.on("greg.PLAYER.CallbacksRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.CallbacksRemoved", (payload) => {
    console.log("Hook greg.PLAYER.CallbacksRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.CallbacksRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.CallbacksRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.CallbacksRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
