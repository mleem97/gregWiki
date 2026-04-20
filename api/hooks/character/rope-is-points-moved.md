---
title: Rope.IsPointsMoved
description: Hook event for Rope.IsPointsMoved
path: /api/hooks/character/rope-is-points-moved
---

# Rope.IsPointsMoved

> **Hook ID:** `greg.character.rope.ispointsmoved`
> **Category:** Character
> **Namespace:** `Il2CppGogoGaga.OptimizedRopesAndCables`

This hook intercepts calls to `Rope.IsPointsMoved()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsPointsMoved()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `IsPointsMoved` events in `Rope`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.rope.ispointsmoved", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.rope.ispointsmoved", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.rope.ispointsmoved")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.rope.ispointsmoved", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.rope.ispointsmoved", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.rope.ispointsmoved", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
