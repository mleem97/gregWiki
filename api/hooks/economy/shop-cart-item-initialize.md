---
title: ShopCartItem.Initialize
description: Hook event for ShopCartItem.Initialize
path: /api/hooks/economy/shop-cart-item-initialize
---

# ShopCartItem.Initialize

> **Hook ID:** `greg.economy.shopcartitem.initialize`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ShopCartItem.Initialize()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Initialize(ComputerShop shop, String itemName, Int32 itemID, Int32 price, ObjectInHand itemType, Int32 firstSpawnUID, Nullable`1 customColor)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `shop` | `ComputerShop` | ... |
| `itemName` | `String` | ... |
| `itemID` | `Int32` | ... |
| `price` | `Int32` | ... |
| `itemType` | `ObjectInHand` | ... |
| `firstSpawnUID` | `Int32` | ... |
| `customColor` | `Nullable`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `Initialize` events in `ShopCartItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.shopcartitem.initialize", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.shopcartitem.initialize", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.shopcartitem.initialize")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.shopcartitem.initialize", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.shopcartitem.initialize", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.shopcartitem.initialize", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
