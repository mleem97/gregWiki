---
title: GetServerTypeForIP
description: Documentation for greg.CUSTOMER.GetServerTypeForIP
path: /api/hooks/customer/getservertypeforip
---

# GetServerTypeForIP

> **Hook ID:** `greg.CUSTOMER.GetServerTypeForIP`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.GetServerTypeForIP

## Native Signature
```csharp
Il2Cpp.CustomerBase::GetServerTypeForIP(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetServerTypeForIP` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.GetServerTypeForIP", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.GetServerTypeForIP");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.GetServerTypeForIP", function(payload)
    greg.log("Hook greg.CUSTOMER.GetServerTypeForIP received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.GetServerTypeForIP fired")

greg.on("greg.CUSTOMER.GetServerTypeForIP", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.GetServerTypeForIP", (payload) => {
    console.log("Hook greg.CUSTOMER.GetServerTypeForIP triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.GetServerTypeForIP".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.GetServerTypeForIP", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.GetServerTypeForIP fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
