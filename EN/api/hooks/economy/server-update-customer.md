---
title: Server.UpdateCustomer
description: Hook event for Server.UpdateCustomer
path: /api/hooks/economy/server-update-customer
---

# Server.UpdateCustomer

> **Hook ID:** `greg.economy.server.updatecustomer`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.UpdateCustomer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateCustomer(Int32 newCustomerID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `newCustomerID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateCustomer` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.server.updatecustomer", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.server.updatecustomer", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.server.updatecustomer")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.server.updatecustomer", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.server.updatecustomer", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.server.updatecustomer", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
