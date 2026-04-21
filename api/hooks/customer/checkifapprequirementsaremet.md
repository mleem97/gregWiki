---
title: CheckIfAppRequirementsAreMet
description: Documentation for greg.CUSTOMER.CheckIfAppRequirementsAreMet
path: /api/hooks/customer/checkifapprequirementsaremet
---

# CheckIfAppRequirementsAreMet

> **Hook ID:** `greg.CUSTOMER.CheckIfAppRequirementsAreMet`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.CheckIfAppRequirementsAreMet

## Native Signature
```csharp
Il2Cpp.CustomerBase::CheckIfAppRequirementsAreMet()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CheckIfAppRequirementsAreMet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.CheckIfAppRequirementsAreMet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.CheckIfAppRequirementsAreMet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.CheckIfAppRequirementsAreMet", function(payload)
    greg.log("Hook greg.CUSTOMER.CheckIfAppRequirementsAreMet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.CheckIfAppRequirementsAreMet fired")

greg.on("greg.CUSTOMER.CheckIfAppRequirementsAreMet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.CheckIfAppRequirementsAreMet", (payload) => {
    console.log("Hook greg.CUSTOMER.CheckIfAppRequirementsAreMet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.CheckIfAppRequirementsAreMet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.CheckIfAppRequirementsAreMet", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.CheckIfAppRequirementsAreMet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
