---
title: RopeMesh.CheckEndPoints
description: Hook event for RopeMesh.CheckEndPoints
path: /api/hooks/world/rope-mesh-check-end-points
---

# RopeMesh.CheckEndPoints

> **Hook ID:** `greg.world.ropemesh.checkendpoints`
> **Category:** World
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `RopeMesh.CheckEndPoints()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CheckEndPoints()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CheckEndPoints` events in `RopeMesh`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.ropemesh.checkendpoints", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.ropemesh.checkendpoints", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.ropemesh.checkendpoints")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.ropemesh.checkendpoints", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.ropemesh.checkendpoints", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.ropemesh.checkendpoints", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
