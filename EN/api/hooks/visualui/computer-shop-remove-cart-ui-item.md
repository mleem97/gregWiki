---
title: ComputerShop.RemoveCartUIItem
description: Hook event for ComputerShop.RemoveCartUIItem
path: /api/hooks/visualui/computer-shop-remove-cart-ui-item
---

# ComputerShop.RemoveCartUIItem

> **Hook ID:** `greg.visualui.computershop.removecartuiitem`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.RemoveCartUIItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveCartUIItem(ShopCartItem cartItem)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cartItem` | `ShopCartItem` | ... |


## Using this Hook

::: tip
Use this hook to react to `RemoveCartUIItem` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.computershop.removecartuiitem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.computershop.removecartuiitem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.computershop.removecartuiitem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.computershop.removecartuiitem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.computershop.removecartuiitem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.computershop.removecartuiitem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
