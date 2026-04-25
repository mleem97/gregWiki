---
title: CreateShopButton
description: Documentation for greg.SYSTEM.CreateShopButton
path: /api/hooks/system/createshopbutton
---

# CreateShopButton

> **Hook ID:** `greg.SYSTEM.CreateShopButton`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.CreateShopButton

## Native Signature
```csharp
Il2Cpp.ModLoader::CreateShopButton(int, ShopItemConfig, Sprite)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateShopButton` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CreateShopButton", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CreateShopButton");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CreateShopButton", function(payload)
    greg.log("Hook greg.SYSTEM.CreateShopButton received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CreateShopButton fired")

greg.on("greg.SYSTEM.CreateShopButton", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CreateShopButton", (payload) => {
    console.log("Hook greg.SYSTEM.CreateShopButton triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CreateShopButton".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CreateShopButton", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CreateShopButton fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
