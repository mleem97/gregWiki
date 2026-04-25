---
title: ButtonCancelBuyWall
description: Documentation for greg.SYSTEM.ButtonCancelBuyWall
path: /api/hooks/system/buttoncancelbuywall
---

# ButtonCancelBuyWall

> **Hook ID:** `greg.SYSTEM.ButtonCancelBuyWall`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ButtonCancelBuyWall

## Native Signature
```csharp
Il2Cpp.MainGameManager::ButtonCancelBuyWall()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonCancelBuyWall` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonCancelBuyWall", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonCancelBuyWall");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonCancelBuyWall", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonCancelBuyWall received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonCancelBuyWall fired")

greg.on("greg.SYSTEM.ButtonCancelBuyWall", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonCancelBuyWall", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonCancelBuyWall triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonCancelBuyWall".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonCancelBuyWall", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonCancelBuyWall fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
