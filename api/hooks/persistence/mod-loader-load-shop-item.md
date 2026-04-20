---
title: ModLoader.LoadShopItem
description: Hook event for ModLoader.LoadShopItem
path: /api/hooks/persistence/mod-loader-load-shop-item
---

# ModLoader.LoadShopItem

> **Hook ID:** `greg.persistence.modloader.loadshopitem`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.LoadShopItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadShopItem(String folderPath, String folderName, ShopItemConfig config)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `folderPath` | `String` | ... |
| `folderName` | `String` | ... |
| `config` | `ShopItemConfig` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadShopItem` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.modloader.loadshopitem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.modloader.loadshopitem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.modloader.loadshopitem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.modloader.loadshopitem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.modloader.loadshopitem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.modloader.loadshopitem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
