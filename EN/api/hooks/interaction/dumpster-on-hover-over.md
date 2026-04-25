---
title: Dumpster.OnHoverOver
description: Hook event for Dumpster.OnHoverOver
path: /api/hooks/interaction/dumpster-on-hover-over
---

# Dumpster.OnHoverOver

> **Hook ID:** `greg.interaction.dumpster.onhoverover`
> **Category:** Interaction
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Dumpster.OnHoverOver()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnHoverOver()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnHoverOver` events in `Dumpster`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.interaction.dumpster.onhoverover", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.interaction.dumpster.onhoverover", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.interaction.dumpster.onhoverover")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.interaction.dumpster.onhoverover", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.interaction.dumpster.onhoverover", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.interaction.dumpster.onhoverover", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
