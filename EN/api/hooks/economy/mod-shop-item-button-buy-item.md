---
title: ModShopItem.ButtonBuyItem
description: Hook event for ModShopItem.ButtonBuyItem
path: /api/hooks/economy/mod-shop-item-button-buy-item
---

# ModShopItem.ButtonBuyItem

> **Hook ID:** `greg.economy.modshopitem.buttonbuyitem`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModShopItem.ButtonBuyItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonBuyItem()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonBuyItem` events in `ModShopItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.modshopitem.buttonbuyitem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.modshopitem.buttonbuyitem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.modshopitem.buttonbuyitem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.modshopitem.buttonbuyitem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.modshopitem.buttonbuyitem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.modshopitem.buttonbuyitem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
