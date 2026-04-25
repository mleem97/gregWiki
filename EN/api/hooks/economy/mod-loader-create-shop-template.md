---
title: ModLoader.CreateShopTemplate
description: Hook event for ModLoader.CreateShopTemplate
path: /api/hooks/economy/mod-loader-create-shop-template
---

# ModLoader.CreateShopTemplate

> **Hook ID:** `greg.economy.modloader.createshoptemplate`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.CreateShopTemplate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
GameObject CreateShopTemplate(ShopItemConfig config, Mesh mesh, Material material, String folderName)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `config` | `ShopItemConfig` | ... |
| `mesh` | `Mesh` | ... |
| `material` | `Material` | ... |
| `folderName` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateShopTemplate` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.modloader.createshoptemplate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.modloader.createshoptemplate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.modloader.createshoptemplate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.modloader.createshoptemplate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.modloader.createshoptemplate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.modloader.createshoptemplate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `GameObject`
- **Safe to block?**: Yes
