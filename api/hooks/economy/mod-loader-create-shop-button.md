---
title: ModLoader.CreateShopButton
description: Hook event for ModLoader.CreateShopButton
path: /api/hooks/economy/mod-loader-create-shop-button
---

# ModLoader.CreateShopButton

> **Hook ID:** `greg.economy.modloader.createshopbutton`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.CreateShopButton()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CreateShopButton(Int32 modID, ShopItemConfig config, Sprite icon)
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
Use this hook to react to `CreateShopButton` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.modloader.createshopbutton", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.modloader.createshopbutton", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.modloader.createshopbutton")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.modloader.createshopbutton", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.modloader.createshopbutton", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.modloader.createshopbutton", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
