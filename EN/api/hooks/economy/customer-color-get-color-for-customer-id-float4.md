---
title: CustomerColor.GetColorForCustomerIdFloat4
description: Hook event for CustomerColor.GetColorForCustomerIdFloat4
path: /api/hooks/economy/customer-color-get-color-for-customer-id-float4
---

# CustomerColor.GetColorForCustomerIdFloat4

> **Hook ID:** `greg.economy.customercolor.getcolorforcustomeridfloat4`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerColor.GetColorForCustomerIdFloat4()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
float4 GetColorForCustomerIdFloat4(Int32 customerId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetColorForCustomerIdFloat4` events in `CustomerColor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customercolor.getcolorforcustomeridfloat4", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customercolor.getcolorforcustomeridfloat4", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customercolor.getcolorforcustomeridfloat4")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customercolor.getcolorforcustomeridfloat4", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customercolor.getcolorforcustomeridfloat4", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customercolor.getcolorforcustomeridfloat4", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `float4`
- **Safe to block?**: Yes
