---
title: Interact.LabelActionOnClick
description: Hook event for Interact.LabelActionOnClick
path: /api/hooks/interaction/interact-label-action-on-click
---

# Interact.LabelActionOnClick

> **Hook ID:** `greg.interaction.interact.labelactiononclick`
> **Category:** Interaction
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Interact.LabelActionOnClick()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LabelActionOnClick()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `LabelActionOnClick` events in `Interact`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.interaction.interact.labelactiononclick", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.interaction.interact.labelactiononclick", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.interaction.interact.labelactiononclick")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.interaction.interact.labelactiononclick", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.interaction.interact.labelactiononclick", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.interaction.interact.labelactiononclick", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
