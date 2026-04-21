---
title: CustomerSet
description: Documentation for greg.CUSTOMER.CustomerSet
path: /api/hooks/customer/customerset
---

# CustomerSet

> **Hook ID:** `greg.CUSTOMER.CustomerSet`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerCard.SetCustomer

## Native Signature
```csharp
Il2Cpp.CustomerCard::SetCustomer(CustomerItem)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CustomerSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.CustomerSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.CustomerSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.CustomerSet", function(payload)
    greg.log("Hook greg.CUSTOMER.CustomerSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.CustomerSet fired")

greg.on("greg.CUSTOMER.CustomerSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.CustomerSet", (payload) => {
    console.log("Hook greg.CUSTOMER.CustomerSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.CustomerSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.CustomerSet", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.CustomerSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
