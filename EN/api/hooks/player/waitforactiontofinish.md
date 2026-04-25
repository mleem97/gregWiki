---
title: WaitForActionToFinish
description: Documentation for greg.PLAYER.WaitForActionToFinish
path: /api/hooks/player/waitforactiontofinish
---

# WaitForActionToFinish

> **Hook ID:** `greg.PLAYER.WaitForActionToFinish`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerManager.WaitForActionToFinish

## Native Signature
```csharp
Il2Cpp.PlayerManager::WaitForActionToFinish(Vector3, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `WaitForActionToFinish` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.WaitForActionToFinish", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.WaitForActionToFinish");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.WaitForActionToFinish", function(payload)
    greg.log("Hook greg.PLAYER.WaitForActionToFinish received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.WaitForActionToFinish fired")

greg.on("greg.PLAYER.WaitForActionToFinish", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.WaitForActionToFinish", (payload) => {
    console.log("Hook greg.PLAYER.WaitForActionToFinish triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.WaitForActionToFinish".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.WaitForActionToFinish", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.WaitForActionToFinish fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
