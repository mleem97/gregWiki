---
title: AreAllAppRequirementsMet
description: Documentation for greg.CUSTOMER.AreAllAppRequirementsMet
path: /api/hooks/customer/areallapprequirementsmet
---

# AreAllAppRequirementsMet

> **Hook ID:** `greg.CUSTOMER.AreAllAppRequirementsMet`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.AreAllAppRequirementsMet

## Native Signature
```csharp
Il2Cpp.CustomerBase::AreAllAppRequirementsMet()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AreAllAppRequirementsMet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.AreAllAppRequirementsMet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.AreAllAppRequirementsMet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.AreAllAppRequirementsMet", function(payload)
    greg.log("Hook greg.CUSTOMER.AreAllAppRequirementsMet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.AreAllAppRequirementsMet fired")

greg.on("greg.CUSTOMER.AreAllAppRequirementsMet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.AreAllAppRequirementsMet", (payload) => {
    console.log("Hook greg.CUSTOMER.AreAllAppRequirementsMet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.AreAllAppRequirementsMet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.AreAllAppRequirementsMet", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.AreAllAppRequirementsMet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
