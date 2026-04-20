---
title: Rope.SetEndPoint
description: Hook event for Rope.SetEndPoint
path: /api/hooks/world/rope-set-end-point
---

# Rope.SetEndPoint

> **Hook ID:** `greg.world.rope.setendpoint`
> **Category:** World
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `Rope.SetEndPoint()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetEndPoint(Transform newEndPoint, Boolean instantAssign)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `newEndPoint` | `Transform` | ... |
| `instantAssign` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetEndPoint` events in `Rope`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.rope.setendpoint", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.rope.setendpoint", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.rope.setendpoint")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.rope.setendpoint", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.rope.setendpoint", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.rope.setendpoint", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
