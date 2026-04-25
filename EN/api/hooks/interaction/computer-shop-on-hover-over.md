---
title: ComputerShop.OnHoverOver
description: Hook event for ComputerShop.OnHoverOver
path: /api/hooks/interaction/computer-shop-on-hover-over
---

# ComputerShop.OnHoverOver

> **Hook ID:** `greg.interaction.computershop.onhoverover`
> **Category:** Interaction
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.OnHoverOver()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnHoverOver()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnHoverOver` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.interaction.computershop.onhoverover", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.interaction.computershop.onhoverover", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.interaction.computershop.onhoverover")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.interaction.computershop.onhoverover", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.interaction.computershop.onhoverover", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.interaction.computershop.onhoverover", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
