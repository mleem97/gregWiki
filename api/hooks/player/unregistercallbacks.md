---
title: UnregisterCallbacks
description: Documentation for greg.PLAYER.UnregisterCallbacks
path: /api/hooks/player/unregistercallbacks
---

# UnregisterCallbacks

> **Hook ID:** `greg.PLAYER.UnregisterCallbacks`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerActions.UnregisterCallbacks

## Native Signature
```csharp
Il2Cpp.PlayerActions::UnregisterCallbacks(InputController.IPlayerActions)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UnregisterCallbacks` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.UnregisterCallbacks", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.UnregisterCallbacks");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.UnregisterCallbacks", function(payload)
    greg.log("Hook greg.PLAYER.UnregisterCallbacks received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.UnregisterCallbacks fired")

greg.on("greg.PLAYER.UnregisterCallbacks", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.UnregisterCallbacks", (payload) => {
    console.log("Hook greg.PLAYER.UnregisterCallbacks triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.UnregisterCallbacks".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.UnregisterCallbacks", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.UnregisterCallbacks fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
