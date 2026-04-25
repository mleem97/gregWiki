---
title: ComputerShop.SpawnNewCartItem
description: Hook event for ComputerShop.SpawnNewCartItem
path: /api/hooks/lifecycle/computer-shop-spawn-new-cart-item
---

# ComputerShop.SpawnNewCartItem

> **Hook ID:** `greg.lifecycle.computershop.spawnnewcartitem`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.SpawnNewCartItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SpawnNewCartItem(Int32 itemID, Int32 price, ObjectInHand itemType, String displayName, Nullable`1 chosenColor)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `itemID` | `Int32` | ... |
| `price` | `Int32` | ... |
| `itemType` | `ObjectInHand` | ... |
| `displayName` | `String` | ... |
| `chosenColor` | `Nullable`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `SpawnNewCartItem` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.computershop.spawnnewcartitem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.computershop.spawnnewcartitem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.computershop.spawnnewcartitem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.computershop.spawnnewcartitem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.computershop.spawnnewcartitem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.computershop.spawnnewcartitem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
