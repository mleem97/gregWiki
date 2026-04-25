---
title: RopeMesh.CreateRopeMesh
description: Hook event for RopeMesh.CreateRopeMesh
path: /api/hooks/world/rope-mesh-create-rope-mesh
---

# RopeMesh.CreateRopeMesh

> **Hook ID:** `greg.world.ropemesh.createropemesh`
> **Category:** World
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `RopeMesh.CreateRopeMesh()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CreateRopeMesh(Il2CppStructArray`1 points, Single radius, Int32 segmentsPerWire)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `points` | `Il2CppStructArray`1` | ... |
| `radius` | `Single` | ... |
| `segmentsPerWire` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateRopeMesh` events in `RopeMesh`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.ropemesh.createropemesh", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.ropemesh.createropemesh", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.ropemesh.createropemesh")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.ropemesh.createropemesh", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.ropemesh.createropemesh", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.ropemesh.createropemesh", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
