---
title: GateLever.TruckComing
description: Hook event for GateLever.TruckComing
path: /api/hooks/world/gate-lever-truck-coming
---

# GateLever.TruckComing

> **Hook ID:** `greg.world.gatelever.truckcoming`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `GateLever.TruckComing()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void TruckComing()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TruckComing` events in `GateLever`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.gatelever.truckcoming", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.gatelever.truckcoming", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.gatelever.truckcoming")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.gatelever.truckcoming", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.gatelever.truckcoming", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.gatelever.truckcoming", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
