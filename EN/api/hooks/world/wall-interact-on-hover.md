---
title: Wall.InteractOnHover
description: Hook event for Wall.InteractOnHover
path: /api/hooks/world/wall-interact-on-hover
---

# Wall.InteractOnHover

> **Hook ID:** `greg.world.wall.interactonhover`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Wall.InteractOnHover()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InteractOnHover(RaycastHit hit)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `hit` | `RaycastHit` | ... |


## Using this Hook

::: tip
Use this hook to react to `InteractOnHover` events in `Wall`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.wall.interactonhover", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.wall.interactonhover", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.wall.interactonhover")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.wall.interactonhover", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.wall.interactonhover", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.wall.interactonhover", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
