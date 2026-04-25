---
title: RebindUIv2.StartInteractiveRebind
description: Hook event for RebindUIv2.StartInteractiveRebind
path: /api/hooks/world/rebind-u-iv2-start-interactive-rebind
---

# RebindUIv2.StartInteractiveRebind

> **Hook ID:** `greg.world.rebinduiv2.startinteractiverebind`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RebindUIv2.StartInteractiveRebind()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void StartInteractiveRebind()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `StartInteractiveRebind` events in `RebindUIv2`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.rebinduiv2.startinteractiverebind", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.rebinduiv2.startinteractiverebind", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.rebinduiv2.startinteractiverebind")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.rebinduiv2.startinteractiverebind", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.rebinduiv2.startinteractiverebind", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.rebinduiv2.startinteractiverebind", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
