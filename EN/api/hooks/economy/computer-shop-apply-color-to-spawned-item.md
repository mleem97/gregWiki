---
title: ComputerShop.ApplyColorToSpawnedItem
description: Hook event for ComputerShop.ApplyColorToSpawnedItem
path: /api/hooks/economy/computer-shop-apply-color-to-spawned-item
---

# ComputerShop.ApplyColorToSpawnedItem

> **Hook ID:** `greg.economy.computershop.applycolortospawneditem`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.ApplyColorToSpawnedItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ApplyColorToSpawnedItem(Int32 uid, Color color, ObjectInHand itemType)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `uid` | `Int32` | ... |
| `color` | `Color` | ... |
| `itemType` | `ObjectInHand` | ... |


## Using this Hook

::: tip
Use this hook to react to `ApplyColorToSpawnedItem` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.computershop.applycolortospawneditem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.computershop.applycolortospawneditem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.computershop.applycolortospawneditem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.computershop.applycolortospawneditem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.computershop.applycolortospawneditem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.computershop.applycolortospawneditem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
