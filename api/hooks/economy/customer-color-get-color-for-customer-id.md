---
title: CustomerColor.GetColorForCustomerId
description: Hook event for CustomerColor.GetColorForCustomerId
path: /api/hooks/economy/customer-color-get-color-for-customer-id
---

# CustomerColor.GetColorForCustomerId

> **Hook ID:** `greg.economy.customercolor.getcolorforcustomerid`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerColor.GetColorForCustomerId()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Color GetColorForCustomerId(Int32 customerId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetColorForCustomerId` events in `CustomerColor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customercolor.getcolorforcustomerid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customercolor.getcolorforcustomerid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customercolor.getcolorforcustomerid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customercolor.getcolorforcustomerid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customercolor.getcolorforcustomerid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customercolor.getcolorforcustomerid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Color`
- **Safe to block?**: Yes
