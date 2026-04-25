---
title: RopeMesh.DelayedGenerateMesh
description: Hook event for RopeMesh.DelayedGenerateMesh
path: /api/hooks/world/rope-mesh-delayed-generate-mesh
---

# RopeMesh.DelayedGenerateMesh

> **Hook ID:** `greg.world.ropemesh.delayedgeneratemesh`
> **Category:** World
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `RopeMesh.DelayedGenerateMesh()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void DelayedGenerateMesh()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DelayedGenerateMesh` events in `RopeMesh`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.ropemesh.delayedgeneratemesh", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.ropemesh.delayedgeneratemesh", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.ropemesh.delayedgeneratemesh")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.ropemesh.delayedgeneratemesh", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.ropemesh.delayedgeneratemesh", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.ropemesh.delayedgeneratemesh", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
