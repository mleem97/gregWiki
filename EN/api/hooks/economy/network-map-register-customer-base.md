---
title: NetworkMap.RegisterCustomerBase
description: Hook event for NetworkMap.RegisterCustomerBase
path: /api/hooks/economy/network-map-register-customer-base
---

# NetworkMap.RegisterCustomerBase

> **Hook ID:** `greg.economy.networkmap.registercustomerbase`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.RegisterCustomerBase()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RegisterCustomerBase(CustomerBase customerBase)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerBase` | `CustomerBase` | ... |


## Using this Hook

::: tip
Use this hook to react to `RegisterCustomerBase` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.networkmap.registercustomerbase", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.networkmap.registercustomerbase", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.networkmap.registercustomerbase")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.networkmap.registercustomerbase", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.networkmap.registercustomerbase", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.networkmap.registercustomerbase", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
