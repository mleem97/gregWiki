---
title: ComputerShop.ButtonCheckOut
description: Hook event for ComputerShop.ButtonCheckOut
path: /api/hooks/economy/computer-shop-button-check-out
---

# ComputerShop.ButtonCheckOut

> **Hook ID:** `greg.economy.computershop.buttoncheckout`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.ButtonCheckOut()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonCheckOut()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonCheckOut` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.computershop.buttoncheckout", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.computershop.buttoncheckout", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.computershop.buttoncheckout")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.computershop.buttoncheckout", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.computershop.buttoncheckout", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.computershop.buttoncheckout", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
