---
title: ComputerShop.BuyNewItem
description: Hook event for ComputerShop.BuyNewItem
path: /api/hooks/economy/computer-shop-buy-new-item
---

# ComputerShop.BuyNewItem

> **Hook ID:** `greg.economy.computershop.buynewitem`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.BuyNewItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void BuyNewItem(Int32 itemID, Int32 price, ObjectInHand itemType, String displayName)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `itemID` | `Int32` | ... |
| `price` | `Int32` | ... |
| `itemType` | `ObjectInHand` | ... |
| `displayName` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `BuyNewItem` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.computershop.buynewitem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.computershop.buynewitem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.computershop.buynewitem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.computershop.buynewitem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.computershop.buynewitem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.computershop.buynewitem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
