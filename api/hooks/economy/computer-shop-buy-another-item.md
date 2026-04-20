---
title: ComputerShop.BuyAnotherItem
description: Hook event for ComputerShop.BuyAnotherItem
path: /api/hooks/economy/computer-shop-buy-another-item
---

# ComputerShop.BuyAnotherItem

> **Hook ID:** `greg.economy.computershop.buyanotheritem`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.BuyAnotherItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void BuyAnotherItem(Int32 itemID, Int32 price, ObjectInHand itemType, ShopCartItem cartItem)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `itemID` | `Int32` | ... |
| `price` | `Int32` | ... |
| `itemType` | `ObjectInHand` | ... |
| `cartItem` | `ShopCartItem` | ... |


## Using this Hook

::: tip
Use this hook to react to `BuyAnotherItem` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.computershop.buyanotheritem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.computershop.buyanotheritem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.computershop.buyanotheritem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.computershop.buyanotheritem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.computershop.buyanotheritem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.computershop.buyanotheritem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
