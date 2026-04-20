---
title: CableLink.OnHoverOver
description: Hook event for CableLink.OnHoverOver
path: /api/hooks/interaction/cable-link-on-hover-over
---

# CableLink.OnHoverOver

> **Hook ID:** `greg.interaction.cablelink.onhoverover`
> **Category:** Interaction
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableLink.OnHoverOver()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnHoverOver()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnHoverOver` events in `CableLink`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.interaction.cablelink.onhoverover", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.interaction.cablelink.onhoverover", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.interaction.cablelink.onhoverover")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.interaction.cablelink.onhoverover", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.interaction.cablelink.onhoverover", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.interaction.cablelink.onhoverover", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
