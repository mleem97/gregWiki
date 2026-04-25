---
title: ResetAllAppSpeeds
description: Documentation for greg.CUSTOMER.ResetAllAppSpeeds
path: /api/hooks/customer/resetallappspeeds
---

# ResetAllAppSpeeds

> **Hook ID:** `greg.CUSTOMER.ResetAllAppSpeeds`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.ResetAllAppSpeeds

## Native Signature
```csharp
Il2Cpp.CustomerBase::ResetAllAppSpeeds()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetAllAppSpeeds` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.ResetAllAppSpeeds", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.ResetAllAppSpeeds");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.ResetAllAppSpeeds", function(payload)
    greg.log("Hook greg.CUSTOMER.ResetAllAppSpeeds received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.ResetAllAppSpeeds fired")

greg.on("greg.CUSTOMER.ResetAllAppSpeeds", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.ResetAllAppSpeeds", (payload) => {
    console.log("Hook greg.CUSTOMER.ResetAllAppSpeeds triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.ResetAllAppSpeeds".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.ResetAllAppSpeeds", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.ResetAllAppSpeeds fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
