---
title: GetTotalAppSpeed
description: Documentation for greg.CUSTOMER.GetTotalAppSpeed
path: /api/hooks/customer/gettotalappspeed
---

# GetTotalAppSpeed

> **Hook ID:** `greg.CUSTOMER.GetTotalAppSpeed`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.GetTotalAppSpeed

## Native Signature
```csharp
Il2Cpp.CustomerBase::GetTotalAppSpeed()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetTotalAppSpeed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.GetTotalAppSpeed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.GetTotalAppSpeed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.GetTotalAppSpeed", function(payload)
    greg.log("Hook greg.CUSTOMER.GetTotalAppSpeed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.GetTotalAppSpeed fired")

greg.on("greg.CUSTOMER.GetTotalAppSpeed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.GetTotalAppSpeed", (payload) => {
    console.log("Hook greg.CUSTOMER.GetTotalAppSpeed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.GetTotalAppSpeed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.GetTotalAppSpeed", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.GetTotalAppSpeed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
