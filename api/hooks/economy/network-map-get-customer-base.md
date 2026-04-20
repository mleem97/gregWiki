---
title: NetworkMap.GetCustomerBase
description: Hook event for NetworkMap.GetCustomerBase
path: /api/hooks/economy/network-map-get-customer-base
---

# NetworkMap.GetCustomerBase

> **Hook ID:** `greg.economy.networkmap.getcustomerbase`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.GetCustomerBase()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
CustomerBase GetCustomerBase(Int32 customerId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetCustomerBase` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.networkmap.getcustomerbase", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.networkmap.getcustomerbase", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.networkmap.getcustomerbase")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.networkmap.getcustomerbase", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.networkmap.getcustomerbase", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.networkmap.getcustomerbase", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `CustomerBase`
- **Safe to block?**: Yes
