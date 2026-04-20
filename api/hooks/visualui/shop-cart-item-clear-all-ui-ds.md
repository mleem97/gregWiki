---
title: ShopCartItem.ClearAllUIDs
description: Hook event for ShopCartItem.ClearAllUIDs
path: /api/hooks/visualui/shop-cart-item-clear-all-ui-ds
---

# ShopCartItem.ClearAllUIDs

> **Hook ID:** `greg.visualui.shopcartitem.clearalluids`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ShopCartItem.ClearAllUIDs()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ClearAllUIDs()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ClearAllUIDs` events in `ShopCartItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.shopcartitem.clearalluids", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.shopcartitem.clearalluids", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.shopcartitem.clearalluids")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.shopcartitem.clearalluids", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.shopcartitem.clearalluids", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.shopcartitem.clearalluids", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
