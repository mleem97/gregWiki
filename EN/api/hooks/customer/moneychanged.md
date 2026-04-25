---
title: MoneyChanged
description: Documentation for greg.CUSTOMER.MoneyChanged
path: /api/hooks/customer/moneychanged
---

# MoneyChanged

> **Hook ID:** `greg.CUSTOMER.MoneyChanged`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.UpdateMoney

## Native Signature
```csharp
Il2Cpp.CustomerBase::UpdateMoney()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MoneyChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.MoneyChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.MoneyChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.MoneyChanged", function(payload)
    greg.log("Hook greg.CUSTOMER.MoneyChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.MoneyChanged fired")

greg.on("greg.CUSTOMER.MoneyChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.MoneyChanged", (payload) => {
    console.log("Hook greg.CUSTOMER.MoneyChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.MoneyChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.MoneyChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.MoneyChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
