---
title: GetCustomerBase
description: Documentation for greg.NETWORK.GetCustomerBase
path: /api/hooks/network/getcustomerbase
---

# GetCustomerBase

> **Hook ID:** `greg.NETWORK.GetCustomerBase`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetCustomerBase

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetCustomerBase(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCustomerBase` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetCustomerBase", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetCustomerBase");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetCustomerBase", function(payload)
    greg.log("Hook greg.NETWORK.GetCustomerBase received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetCustomerBase fired")

greg.on("greg.NETWORK.GetCustomerBase", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetCustomerBase", (payload) => {
    console.log("Hook greg.NETWORK.GetCustomerBase triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetCustomerBase".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetCustomerBase", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetCustomerBase fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
