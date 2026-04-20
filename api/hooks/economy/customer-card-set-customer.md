---
title: CustomerCard.SetCustomer
description: Hook event for CustomerCard.SetCustomer
path: /api/hooks/economy/customer-card-set-customer
---

# CustomerCard.SetCustomer

> **Hook ID:** `greg.economy.customercard.setcustomer`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerCard.SetCustomer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetCustomer(CustomerItem _customerItem)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_customerItem` | `CustomerItem` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetCustomer` events in `CustomerCard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customercard.setcustomer", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customercard.setcustomer", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customercard.setcustomer")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customercard.setcustomer", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customercard.setcustomer", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customercard.setcustomer", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
