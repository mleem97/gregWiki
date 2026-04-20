---
title: RebindUIv2.PerformInteractiveRebind
description: Hook event for RebindUIv2.PerformInteractiveRebind
path: /api/hooks/world/rebind-u-iv2-perform-interactive-rebind
---

# RebindUIv2.PerformInteractiveRebind

> **Hook ID:** `greg.world.rebinduiv2.performinteractiverebind`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RebindUIv2.PerformInteractiveRebind()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PerformInteractiveRebind(InputAction action, Int32 bindingIndex, Boolean allCompositeParts)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `action` | `InputAction` | ... |
| `bindingIndex` | `Int32` | ... |
| `allCompositeParts` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `PerformInteractiveRebind` events in `RebindUIv2`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.rebinduiv2.performinteractiverebind", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.rebinduiv2.performinteractiverebind", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.rebinduiv2.performinteractiverebind")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.rebinduiv2.performinteractiverebind", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.rebinduiv2.performinteractiverebind", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.rebinduiv2.performinteractiverebind", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
