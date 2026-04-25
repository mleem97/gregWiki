---
title: Server.InteractOnHover
description: Hook event for Server.InteractOnHover
path: /api/hooks/world/server-interact-on-hover
---

# Server.InteractOnHover

> **Hook ID:** `greg.world.server.interactonhover`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.InteractOnHover()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `InteractOnHover` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.server.interactonhover", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.server.interactonhover", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.server.interactonhover")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.server.interactonhover", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.server.interactonhover", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.server.interactonhover", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
