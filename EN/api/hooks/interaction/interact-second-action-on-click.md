---
title: Interact.SecondActionOnClick
description: Hook event for Interact.SecondActionOnClick
path: /api/hooks/interaction/interact-second-action-on-click
---

# Interact.SecondActionOnClick

> **Hook ID:** `greg.interaction.interact.secondactiononclick`
> **Category:** Interaction
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Interact.SecondActionOnClick()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SecondActionOnClick()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SecondActionOnClick` events in `Interact`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.interaction.interact.secondactiononclick", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.interaction.interact.secondactiononclick", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.interaction.interact.secondactiononclick")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.interaction.interact.secondactiononclick", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.interaction.interact.secondactiononclick", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.interaction.interact.secondactiononclick", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
