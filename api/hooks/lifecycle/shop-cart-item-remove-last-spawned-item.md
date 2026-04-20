---
title: ShopCartItem.RemoveLastSpawnedItem
description: Hook event for ShopCartItem.RemoveLastSpawnedItem
path: /api/hooks/lifecycle/shop-cart-item-remove-last-spawned-item
---

# ShopCartItem.RemoveLastSpawnedItem

> **Hook ID:** `greg.lifecycle.shopcartitem.removelastspawneditem`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ShopCartItem.RemoveLastSpawnedItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 RemoveLastSpawnedItem()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RemoveLastSpawnedItem` events in `ShopCartItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.shopcartitem.removelastspawneditem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.shopcartitem.removelastspawneditem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.shopcartitem.removelastspawneditem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.shopcartitem.removelastspawneditem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.shopcartitem.removelastspawneditem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.shopcartitem.removelastspawneditem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
