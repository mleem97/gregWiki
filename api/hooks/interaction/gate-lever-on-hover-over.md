---
title: GateLever.OnHoverOver
description: Hook event for GateLever.OnHoverOver
path: /api/hooks/interaction/gate-lever-on-hover-over
---

# GateLever.OnHoverOver

> **Hook ID:** `greg.interaction.gatelever.onhoverover`
> **Category:** Interaction
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `GateLever.OnHoverOver()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnHoverOver()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnHoverOver` events in `GateLever`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.interaction.gatelever.onhoverover", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.interaction.gatelever.onhoverover", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.interaction.gatelever.onhoverover")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.interaction.gatelever.onhoverover", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.interaction.gatelever.onhoverover", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.interaction.gatelever.onhoverover", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
