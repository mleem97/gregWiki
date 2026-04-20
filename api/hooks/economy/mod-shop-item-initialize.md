---
title: ModShopItem.Initialize
description: Hook event for ModShopItem.Initialize
path: /api/hooks/economy/mod-shop-item-initialize
---

# ModShopItem.Initialize

> **Hook ID:** `greg.economy.modshopitem.initialize`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModShopItem.Initialize()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Initialize(Int32 modID, ShopItemConfig config, Sprite icon)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `modID` | `Int32` | ... |
| `config` | `ShopItemConfig` | ... |
| `icon` | `Sprite` | ... |


## Using this Hook

::: tip
Use this hook to react to `Initialize` events in `ModShopItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.modshopitem.initialize", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.modshopitem.initialize", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.modshopitem.initialize")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.modshopitem.initialize", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.modshopitem.initialize", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.modshopitem.initialize", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
