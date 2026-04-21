---
title: ShowBuyWallCanvas
description: Documentation for greg.SYSTEM.ShowBuyWallCanvas
path: /api/hooks/system/showbuywallcanvas
---

# ShowBuyWallCanvas

> **Hook ID:** `greg.SYSTEM.ShowBuyWallCanvas`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ShowBuyWallCanvas

## Native Signature
```csharp
Il2Cpp.MainGameManager::ShowBuyWallCanvas(Wall)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowBuyWallCanvas` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShowBuyWallCanvas", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShowBuyWallCanvas");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShowBuyWallCanvas", function(payload)
    greg.log("Hook greg.SYSTEM.ShowBuyWallCanvas received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShowBuyWallCanvas fired")

greg.on("greg.SYSTEM.ShowBuyWallCanvas", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShowBuyWallCanvas", (payload) => {
    console.log("Hook greg.SYSTEM.ShowBuyWallCanvas triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShowBuyWallCanvas".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShowBuyWallCanvas", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShowBuyWallCanvas fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
