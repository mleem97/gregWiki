---
title: CustomerServerCountAndSpeedChanged
description: Documentation for greg.CUSTOMER.CustomerServerCountAndSpeedChanged
path: /api/hooks/customer/customerservercountandspeedchanged
---

# CustomerServerCountAndSpeedChanged

> **Hook ID:** `greg.CUSTOMER.CustomerServerCountAndSpeedChanged`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.UpdateCustomerServerCountAndSpeed

## Native Signature
```csharp
Il2Cpp.CustomerBase::UpdateCustomerServerCountAndSpeed(int, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CustomerServerCountAndSpeedChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.CustomerServerCountAndSpeedChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", function(payload)
    greg.log("Hook greg.CUSTOMER.CustomerServerCountAndSpeedChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.CustomerServerCountAndSpeedChanged fired")

greg.on("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", (payload) => {
    console.log("Hook greg.CUSTOMER.CustomerServerCountAndSpeedChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.CustomerServerCountAndSpeedChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.CustomerServerCountAndSpeedChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
