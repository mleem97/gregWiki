---
title: ShopCartItem.OnRemoveClicked
description: Hook event for ShopCartItem.OnRemoveClicked
path: /api/hooks/character/shop-cart-item-on-remove-clicked
---

# ShopCartItem.OnRemoveClicked

> **Hook ID:** `greg.character.shopcartitem.onremoveclicked`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ShopCartItem.OnRemoveClicked()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnRemoveClicked()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnRemoveClicked` events in `ShopCartItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.shopcartitem.onremoveclicked", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.shopcartitem.onremoveclicked", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.shopcartitem.onremoveclicked")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.shopcartitem.onremoveclicked", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.shopcartitem.onremoveclicked", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.shopcartitem.onremoveclicked", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
