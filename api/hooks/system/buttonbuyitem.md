---
title: ButtonBuyItem
description: Documentation for greg.SYSTEM.ButtonBuyItem
path: /api/hooks/system/buttonbuyitem
---

# ButtonBuyItem

> **Hook ID:** `greg.SYSTEM.ButtonBuyItem`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopItem.ButtonBuyItem

## Native Signature
```csharp
Il2Cpp.ShopItem::ButtonBuyItem()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonBuyItem` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonBuyItem", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonBuyItem");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonBuyItem", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonBuyItem received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonBuyItem fired")

greg.on("greg.SYSTEM.ButtonBuyItem", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonBuyItem", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonBuyItem triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonBuyItem".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonBuyItem", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonBuyItem fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
