---
title: CableLink.SecondActionOnClick
description: Hook event for CableLink.SecondActionOnClick
path: /api/hooks/interaction/cable-link-second-action-on-click
---

# CableLink.SecondActionOnClick

> **Hook ID:** `greg.interaction.cablelink.secondactiononclick`
> **Category:** Interaction
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableLink.SecondActionOnClick()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SecondActionOnClick()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SecondActionOnClick` events in `CableLink`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.interaction.cablelink.secondactiononclick", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.interaction.cablelink.secondactiononclick", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.interaction.cablelink.secondactiononclick")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.interaction.cablelink.secondactiononclick", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.interaction.cablelink.secondactiononclick", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.interaction.cablelink.secondactiononclick", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
