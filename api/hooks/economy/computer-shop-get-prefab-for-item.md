---
title: ComputerShop.GetPrefabForItem
description: Hook event for ComputerShop.GetPrefabForItem
path: /api/hooks/economy/computer-shop-get-prefab-for-item
---

# ComputerShop.GetPrefabForItem

> **Hook ID:** `greg.economy.computershop.getprefabforitem`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.GetPrefabForItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
GameObject GetPrefabForItem(Int32 itemID, ObjectInHand itemType)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `itemID` | `Int32` | ... |
| `itemType` | `ObjectInHand` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetPrefabForItem` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.computershop.getprefabforitem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.computershop.getprefabforitem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.computershop.getprefabforitem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.computershop.getprefabforitem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.computershop.getprefabforitem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.computershop.getprefabforitem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `GameObject`
- **Safe to block?**: Yes
