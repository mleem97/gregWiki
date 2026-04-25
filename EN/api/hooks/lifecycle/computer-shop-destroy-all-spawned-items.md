---
title: ComputerShop.DestroyAllSpawnedItems
description: Hook event for ComputerShop.DestroyAllSpawnedItems
path: /api/hooks/lifecycle/computer-shop-destroy-all-spawned-items
---

# ComputerShop.DestroyAllSpawnedItems

> **Hook ID:** `greg.lifecycle.computershop.destroyallspawneditems`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.DestroyAllSpawnedItems()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void DestroyAllSpawnedItems()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DestroyAllSpawnedItems` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.computershop.destroyallspawneditems", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.computershop.destroyallspawneditems", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.computershop.destroyallspawneditems")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.computershop.destroyallspawneditems", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.computershop.destroyallspawneditems", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.computershop.destroyallspawneditems", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
