---
title: ComputerShop.FreeUpSpawnPoint
description: Hook event for ComputerShop.FreeUpSpawnPoint
path: /api/hooks/lifecycle/computer-shop-free-up-spawn-point
---

# ComputerShop.FreeUpSpawnPoint

> **Hook ID:** `greg.lifecycle.computershop.freeupspawnpoint`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.FreeUpSpawnPoint()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void FreeUpSpawnPoint(Int32 spawnIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `spawnIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `FreeUpSpawnPoint` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.computershop.freeupspawnpoint", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.computershop.freeupspawnpoint", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.computershop.freeupspawnpoint")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.computershop.freeupspawnpoint", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.computershop.freeupspawnpoint", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.computershop.freeupspawnpoint", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
