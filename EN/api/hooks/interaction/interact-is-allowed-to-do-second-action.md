---
title: Interact.IsAllowedToDoSecondAction
description: Hook event for Interact.IsAllowedToDoSecondAction
path: /api/hooks/interaction/interact-is-allowed-to-do-second-action
---

# Interact.IsAllowedToDoSecondAction

> **Hook ID:** `greg.interaction.interact.isallowedtodosecondaction`
> **Category:** Interaction
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Interact.IsAllowedToDoSecondAction()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsAllowedToDoSecondAction()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `IsAllowedToDoSecondAction` events in `Interact`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.interaction.interact.isallowedtodosecondaction", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.interaction.interact.isallowedtodosecondaction", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.interaction.interact.isallowedtodosecondaction")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.interaction.interact.isallowedtodosecondaction", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.interaction.interact.isallowedtodosecondaction", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.interaction.interact.isallowedtodosecondaction", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
