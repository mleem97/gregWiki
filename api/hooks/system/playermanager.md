---
title: PlayerManager
description: Documentation for greg.SYSTEM.PlayerManager.OnBuyingWall
path: /api/hooks/system/playermanager
---

# PlayerManager

> **Hook ID:** `greg.SYSTEM.PlayerManager.OnBuyingWall`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/OnBuyingWall.PlayerManager.OnBuyingWall

## Native Signature
```csharp
Il2Cpp.OnBuyingWall::PlayerManager.OnBuyingWall([In] System.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlayerManager` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PlayerManager.OnBuyingWall", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PlayerManager.OnBuyingWall");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PlayerManager.OnBuyingWall", function(payload)
    greg.log("Hook greg.SYSTEM.PlayerManager.OnBuyingWall received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PlayerManager.OnBuyingWall fired")

greg.on("greg.SYSTEM.PlayerManager.OnBuyingWall", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PlayerManager.OnBuyingWall", (payload) => {
    console.log("Hook greg.SYSTEM.PlayerManager.OnBuyingWall triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PlayerManager.OnBuyingWall".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PlayerManager.OnBuyingWall", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PlayerManager.OnBuyingWall fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
