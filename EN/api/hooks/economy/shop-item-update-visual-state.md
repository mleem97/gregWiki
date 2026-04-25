---
title: ShopItem.UpdateVisualState
description: Hook event for ShopItem.UpdateVisualState
path: /api/hooks/economy/shop-item-update-visual-state
---

# ShopItem.UpdateVisualState

> **Hook ID:** `greg.economy.shopitem.updatevisualstate`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ShopItem.UpdateVisualState()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateVisualState()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `UpdateVisualState` events in `ShopItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.shopitem.updatevisualstate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.shopitem.updatevisualstate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.shopitem.updatevisualstate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.shopitem.updatevisualstate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.shopitem.updatevisualstate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.shopitem.updatevisualstate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
