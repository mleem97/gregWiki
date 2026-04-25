---
title: BoxIl2CppObject
description: Documentation for greg.CUSTOMER.BoxIl2CppObject
path: /api/hooks/customer/boxil2cppobject
---

# BoxIl2CppObject

> **Hook ID:** `greg.CUSTOMER.BoxIl2CppObject`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerNetworkInfo.BoxIl2CppObject

## Native Signature
```csharp
Il2Cpp.CustomerNetworkInfo::BoxIl2CppObject()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BoxIl2CppObject` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.BoxIl2CppObject", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.BoxIl2CppObject");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.BoxIl2CppObject", function(payload)
    greg.log("Hook greg.CUSTOMER.BoxIl2CppObject received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.BoxIl2CppObject fired")

greg.on("greg.CUSTOMER.BoxIl2CppObject", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.BoxIl2CppObject", (payload) => {
    console.log("Hook greg.CUSTOMER.BoxIl2CppObject triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.BoxIl2CppObject".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.BoxIl2CppObject", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.BoxIl2CppObject fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
