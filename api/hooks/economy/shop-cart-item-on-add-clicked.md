---
title: ShopCartItem.OnAddClicked
description: Hook event for ShopCartItem.OnAddClicked
path: /api/hooks/economy/shop-cart-item-on-add-clicked
---

# ShopCartItem.OnAddClicked

> **Hook ID:** `greg.economy.shopcartitem.onaddclicked`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ShopCartItem.OnAddClicked()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnAddClicked()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnAddClicked` events in `ShopCartItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.shopcartitem.onaddclicked", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.shopcartitem.onaddclicked", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.shopcartitem.onaddclicked")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.shopcartitem.onaddclicked", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.shopcartitem.onaddclicked", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.shopcartitem.onaddclicked", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
