---
title: GetEffectiveMoneySpeed
description: Documentation for greg.CUSTOMER.GetEffectiveMoneySpeed
path: /api/hooks/customer/geteffectivemoneyspeed
---

# GetEffectiveMoneySpeed

> **Hook ID:** `greg.CUSTOMER.GetEffectiveMoneySpeed`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.GetEffectiveMoneySpeed

## Native Signature
```csharp
Il2Cpp.CustomerBase::GetEffectiveMoneySpeed()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetEffectiveMoneySpeed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.GetEffectiveMoneySpeed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.GetEffectiveMoneySpeed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.GetEffectiveMoneySpeed", function(payload)
    greg.log("Hook greg.CUSTOMER.GetEffectiveMoneySpeed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.GetEffectiveMoneySpeed fired")

greg.on("greg.CUSTOMER.GetEffectiveMoneySpeed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.GetEffectiveMoneySpeed", (payload) => {
    console.log("Hook greg.CUSTOMER.GetEffectiveMoneySpeed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.GetEffectiveMoneySpeed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.GetEffectiveMoneySpeed", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.GetEffectiveMoneySpeed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
