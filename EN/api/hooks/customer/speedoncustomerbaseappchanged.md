---
title: SpeedOnCustomerBaseAppChanged
description: Documentation for greg.CUSTOMER.SpeedOnCustomerBaseAppChanged
path: /api/hooks/customer/speedoncustomerbaseappchanged
---

# SpeedOnCustomerBaseAppChanged

> **Hook ID:** `greg.CUSTOMER.SpeedOnCustomerBaseAppChanged`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.UpdateSpeedOnCustomerBaseApp

## Native Signature
```csharp
Il2Cpp.CustomerBase::UpdateSpeedOnCustomerBaseApp(int, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SpeedOnCustomerBaseAppChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.SpeedOnCustomerBaseAppChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", function(payload)
    greg.log("Hook greg.CUSTOMER.SpeedOnCustomerBaseAppChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.SpeedOnCustomerBaseAppChanged fired")

greg.on("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", (payload) => {
    console.log("Hook greg.CUSTOMER.SpeedOnCustomerBaseAppChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.SpeedOnCustomerBaseAppChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.SpeedOnCustomerBaseAppChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
