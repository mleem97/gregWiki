---
title: ShopCartItem.AddSpawnedItem
description: Hook event for ShopCartItem.AddSpawnedItem
path: /api/hooks/lifecycle/shop-cart-item-add-spawned-item
---

# ShopCartItem.AddSpawnedItem

> **Hook ID:** `greg.lifecycle.shopcartitem.addspawneditem`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ShopCartItem.AddSpawnedItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AddSpawnedItem(Int32 uid)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `uid` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `AddSpawnedItem` events in `ShopCartItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.shopcartitem.addspawneditem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.shopcartitem.addspawneditem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.shopcartitem.addspawneditem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.shopcartitem.addspawneditem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.shopcartitem.addspawneditem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.shopcartitem.addspawneditem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
