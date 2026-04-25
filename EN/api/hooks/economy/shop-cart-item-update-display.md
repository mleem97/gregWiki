---
title: ShopCartItem.UpdateDisplay
description: Hook event for ShopCartItem.UpdateDisplay
path: /api/hooks/economy/shop-cart-item-update-display
---

# ShopCartItem.UpdateDisplay

> **Hook ID:** `greg.economy.shopcartitem.updatedisplay`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ShopCartItem.UpdateDisplay()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateDisplay()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `UpdateDisplay` events in `ShopCartItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.shopcartitem.updatedisplay", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.shopcartitem.updatedisplay", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.shopcartitem.updatedisplay")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.shopcartitem.updatedisplay", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.shopcartitem.updatedisplay", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.shopcartitem.updatedisplay", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
