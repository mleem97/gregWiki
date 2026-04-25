---
title: UpBaseSet
description: Documentation for greg.CUSTOMER.UpBaseSet
path: /api/hooks/customer/upbaseset
---

# UpBaseSet

> **Hook ID:** `greg.CUSTOMER.UpBaseSet`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.SetUpBase

## Native Signature
```csharp
Il2Cpp.CustomerBase::SetUpBase(CustomerItem, CustomerBaseSaveData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UpBaseSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.UpBaseSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.UpBaseSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.UpBaseSet", function(payload)
    greg.log("Hook greg.CUSTOMER.UpBaseSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.UpBaseSet fired")

greg.on("greg.CUSTOMER.UpBaseSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.UpBaseSet", (payload) => {
    console.log("Hook greg.CUSTOMER.UpBaseSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.UpBaseSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.UpBaseSet", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.UpBaseSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
