---
title: ItemPurchased
description: Documentation for greg.SYSTEM.ItemPurchased
path: /api/hooks/system/itempurchased
---

# ItemPurchased

> **Hook ID:** `greg.SYSTEM.ItemPurchased`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopItem.BuyItem

## Native Signature
```csharp
Il2Cpp.ShopItem::BuyItem()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ItemPurchased` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ItemPurchased", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ItemPurchased");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ItemPurchased", function(payload)
    greg.log("Hook greg.SYSTEM.ItemPurchased received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ItemPurchased fired")

greg.on("greg.SYSTEM.ItemPurchased", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ItemPurchased", (payload) => {
    console.log("Hook greg.SYSTEM.ItemPurchased triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ItemPurchased".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ItemPurchased", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ItemPurchased fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
