---
title: ComputerShop.ButtonBuyShopItem
description: Hook event for ComputerShop.ButtonBuyShopItem
path: /api/hooks/economy/computer-shop-button-buy-shop-item
---

# ComputerShop.ButtonBuyShopItem

> **Hook ID:** `greg.economy.computershop.buttonbuyshopitem`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.ButtonBuyShopItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonBuyShopItem(Int32 itemID, Int32 price, ObjectInHand itemType, String displayName, Boolean isCustomColor)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `itemID` | `Int32` | ... |
| `price` | `Int32` | ... |
| `itemType` | `ObjectInHand` | ... |
| `displayName` | `String` | ... |
| `isCustomColor` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `ButtonBuyShopItem` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.computershop.buttonbuyshopitem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.computershop.buttonbuyshopitem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.computershop.buttonbuyshopitem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.computershop.buttonbuyshopitem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.computershop.buttonbuyshopitem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.computershop.buttonbuyshopitem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
