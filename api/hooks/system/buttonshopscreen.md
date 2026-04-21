---
title: ButtonShopScreen
description: Documentation for greg.SYSTEM.ButtonShopScreen
path: /api/hooks/system/buttonshopscreen
---

# ButtonShopScreen

> **Hook ID:** `greg.SYSTEM.ButtonShopScreen`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonShopScreen

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonShopScreen()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonShopScreen` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonShopScreen", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonShopScreen");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonShopScreen", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonShopScreen received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonShopScreen fired")

greg.on("greg.SYSTEM.ButtonShopScreen", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonShopScreen", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonShopScreen triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonShopScreen".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonShopScreen", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonShopScreen fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
