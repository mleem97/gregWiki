---
title: UpAppSet
description: Documentation for greg.CUSTOMER.UpAppSet
path: /api/hooks/customer/upappset
---

# UpAppSet

> **Hook ID:** `greg.CUSTOMER.UpAppSet`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.SetUpApp

## Native Signature
```csharp
Il2Cpp.CustomerBase::SetUpApp(int, int, CustomerBaseSaveData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UpAppSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.UpAppSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.UpAppSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.UpAppSet", function(payload)
    greg.log("Hook greg.CUSTOMER.UpAppSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.UpAppSet fired")

greg.on("greg.CUSTOMER.UpAppSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.UpAppSet", (payload) => {
    console.log("Hook greg.CUSTOMER.UpAppSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.UpAppSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.UpAppSet", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.UpAppSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
