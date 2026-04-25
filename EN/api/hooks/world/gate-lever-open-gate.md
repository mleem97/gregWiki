---
title: GateLever.OpenGate
description: Hook event for GateLever.OpenGate
path: /api/hooks/world/gate-lever-open-gate
---

# GateLever.OpenGate

> **Hook ID:** `greg.world.gatelever.opengate`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `GateLever.OpenGate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OpenGate()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OpenGate` events in `GateLever`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.gatelever.opengate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.gatelever.opengate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.gatelever.opengate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.gatelever.opengate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.gatelever.opengate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.gatelever.opengate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
