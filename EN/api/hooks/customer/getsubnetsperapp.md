---
title: GetSubnetsPerApp
description: Documentation for greg.CUSTOMER.GetSubnetsPerApp
path: /api/hooks/customer/getsubnetsperapp
---

# GetSubnetsPerApp

> **Hook ID:** `greg.CUSTOMER.GetSubnetsPerApp`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.GetSubnetsPerApp

## Native Signature
```csharp
Il2Cpp.CustomerBase::GetSubnetsPerApp()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSubnetsPerApp` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.GetSubnetsPerApp", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.GetSubnetsPerApp");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.GetSubnetsPerApp", function(payload)
    greg.log("Hook greg.CUSTOMER.GetSubnetsPerApp received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.GetSubnetsPerApp fired")

greg.on("greg.CUSTOMER.GetSubnetsPerApp", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.GetSubnetsPerApp", (payload) => {
    console.log("Hook greg.CUSTOMER.GetSubnetsPerApp triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.GetSubnetsPerApp".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.GetSubnetsPerApp", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.GetSubnetsPerApp fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
