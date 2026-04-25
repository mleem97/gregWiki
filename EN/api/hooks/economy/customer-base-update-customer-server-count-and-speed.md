---
title: CustomerBase.UpdateCustomerServerCountAndSpeed
description: Hook event for CustomerBase.UpdateCustomerServerCountAndSpeed
path: /api/hooks/economy/customer-base-update-customer-server-count-and-speed
---

# CustomerBase.UpdateCustomerServerCountAndSpeed

> **Hook ID:** `greg.economy.customerbase.updatecustomerservercountandspeed`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.UpdateCustomerServerCountAndSpeed()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateCustomerServerCountAndSpeed(Int32 count, Single speed)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `count` | `Int32` | ... |
| `speed` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateCustomerServerCountAndSpeed` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customerbase.updatecustomerservercountandspeed", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customerbase.updatecustomerservercountandspeed", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customerbase.updatecustomerservercountandspeed")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customerbase.updatecustomerservercountandspeed", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customerbase.updatecustomerservercountandspeed", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customerbase.updatecustomerservercountandspeed", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
