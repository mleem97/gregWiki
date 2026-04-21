---
title: RegisterCustomerBase
description: Documentation for greg.NETWORK.RegisterCustomerBase
path: /api/hooks/network/registercustomerbase
---

# RegisterCustomerBase

> **Hook ID:** `greg.NETWORK.RegisterCustomerBase`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.RegisterCustomerBase

## Native Signature
```csharp
Il2Cpp.NetworkMap::RegisterCustomerBase(CustomerBase)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RegisterCustomerBase` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.RegisterCustomerBase", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.RegisterCustomerBase");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.RegisterCustomerBase", function(payload)
    greg.log("Hook greg.NETWORK.RegisterCustomerBase received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.RegisterCustomerBase fired")

greg.on("greg.NETWORK.RegisterCustomerBase", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.RegisterCustomerBase", (payload) => {
    console.log("Hook greg.NETWORK.RegisterCustomerBase triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.RegisterCustomerBase".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.RegisterCustomerBase", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.RegisterCustomerBase fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
