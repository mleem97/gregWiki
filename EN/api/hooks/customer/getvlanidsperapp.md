---
title: GetVlanIdsPerApp
description: Documentation for greg.CUSTOMER.GetVlanIdsPerApp
path: /api/hooks/customer/getvlanidsperapp
---

# GetVlanIdsPerApp

> **Hook ID:** `greg.CUSTOMER.GetVlanIdsPerApp`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.GetVlanIdsPerApp

## Native Signature
```csharp
Il2Cpp.CustomerBase::GetVlanIdsPerApp()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetVlanIdsPerApp` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.GetVlanIdsPerApp", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.GetVlanIdsPerApp");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.GetVlanIdsPerApp", function(payload)
    greg.log("Hook greg.CUSTOMER.GetVlanIdsPerApp received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.GetVlanIdsPerApp fired")

greg.on("greg.CUSTOMER.GetVlanIdsPerApp", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.GetVlanIdsPerApp", (payload) => {
    console.log("Hook greg.CUSTOMER.GetVlanIdsPerApp triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.GetVlanIdsPerApp".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.GetVlanIdsPerApp", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.GetVlanIdsPerApp fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
