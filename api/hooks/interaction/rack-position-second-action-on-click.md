---
title: RackPosition.SecondActionOnClick
description: Hook event for RackPosition.SecondActionOnClick
path: /api/hooks/interaction/rack-position-second-action-on-click
---

# RackPosition.SecondActionOnClick

> **Hook ID:** `greg.interaction.rackposition.secondactiononclick`
> **Category:** Interaction
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackPosition.SecondActionOnClick()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SecondActionOnClick()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SecondActionOnClick` events in `RackPosition`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.interaction.rackposition.secondactiononclick", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.interaction.rackposition.secondactiononclick", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.interaction.rackposition.secondactiononclick")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.interaction.rackposition.secondactiononclick", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.interaction.rackposition.secondactiononclick", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.interaction.rackposition.secondactiononclick", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
