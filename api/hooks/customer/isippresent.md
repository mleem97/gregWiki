---
title: IsIPPresent
description: Documentation for greg.CUSTOMER.IsIPPresent
path: /api/hooks/customer/isippresent
---

# IsIPPresent

> **Hook ID:** `greg.CUSTOMER.IsIPPresent`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.IsIPPresent

## Native Signature
```csharp
Il2Cpp.CustomerBase::IsIPPresent(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsIPPresent` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.IsIPPresent", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.IsIPPresent");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.IsIPPresent", function(payload)
    greg.log("Hook greg.CUSTOMER.IsIPPresent received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.IsIPPresent fired")

greg.on("greg.CUSTOMER.IsIPPresent", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.IsIPPresent", (payload) => {
    console.log("Hook greg.CUSTOMER.IsIPPresent triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.IsIPPresent".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.IsIPPresent", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.IsIPPresent fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
