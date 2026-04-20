---
title: Rope.GetRationalBezierPoint
description: Hook event for Rope.GetRationalBezierPoint
path: /api/hooks/world/rope-get-rational-bezier-point
---

# Rope.GetRationalBezierPoint

> **Hook ID:** `greg.world.rope.getrationalbezierpoint`
> **Category:** World
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `Rope.GetRationalBezierPoint()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector3 GetRationalBezierPoint(Vector3 p0, Vector3 p1, Vector3 p2, Single t, Single w0, Single w1, Single w2)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `p0` | `Vector3` | ... |
| `p1` | `Vector3` | ... |
| `p2` | `Vector3` | ... |
| `t` | `Single` | ... |
| `w0` | `Single` | ... |
| `w1` | `Single` | ... |
| `w2` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetRationalBezierPoint` events in `Rope`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.rope.getrationalbezierpoint", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.rope.getrationalbezierpoint", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.rope.getrationalbezierpoint")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.rope.getrationalbezierpoint", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.rope.getrationalbezierpoint", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.rope.getrationalbezierpoint", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector3`
- **Safe to block?**: Yes
