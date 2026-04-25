---
title: Server.ButtonClickChangeCustomer
description: Hook event for Server.ButtonClickChangeCustomer
path: /api/hooks/economy/server-button-click-change-customer
---

# Server.ButtonClickChangeCustomer

> **Hook ID:** `greg.economy.server.buttonclickchangecustomer`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.ButtonClickChangeCustomer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonClickChangeCustomer(Boolean forward)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `forward` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `ButtonClickChangeCustomer` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.server.buttonclickchangecustomer", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.server.buttonclickchangecustomer", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.server.buttonclickchangecustomer")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.server.buttonclickchangecustomer", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.server.buttonclickchangecustomer", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.server.buttonclickchangecustomer", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
