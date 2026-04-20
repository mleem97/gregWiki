---
title: WorldObjectButton.InteractOnHover
description: Hook event for WorldObjectButton.InteractOnHover
path: /api/hooks/world/world-object-button-interact-on-hover
---

# WorldObjectButton.InteractOnHover

> **Hook ID:** `greg.world.worldobjectbutton.interactonhover`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WorldObjectButton.InteractOnHover()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `InteractOnHover` events in `WorldObjectButton`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.worldobjectbutton.interactonhover", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.worldobjectbutton.interactonhover", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.worldobjectbutton.interactonhover")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.worldobjectbutton.interactonhover", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.worldobjectbutton.interactonhover", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.worldobjectbutton.interactonhover", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
