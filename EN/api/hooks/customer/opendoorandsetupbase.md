---
title: OpenDoorAndSetupBase
description: Documentation for greg.CUSTOMER.OpenDoorAndSetupBase
path: /api/hooks/customer/opendoorandsetupbase
---

# OpenDoorAndSetupBase

> **Hook ID:** `greg.CUSTOMER.OpenDoorAndSetupBase`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBaseDoor.OpenDoorAndSetupBase

## Native Signature
```csharp
Il2Cpp.CustomerBaseDoor::OpenDoorAndSetupBase(CustomerItem)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OpenDoorAndSetupBase` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.OpenDoorAndSetupBase", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.OpenDoorAndSetupBase");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.OpenDoorAndSetupBase", function(payload)
    greg.log("Hook greg.CUSTOMER.OpenDoorAndSetupBase received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.OpenDoorAndSetupBase fired")

greg.on("greg.CUSTOMER.OpenDoorAndSetupBase", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.OpenDoorAndSetupBase", (payload) => {
    console.log("Hook greg.CUSTOMER.OpenDoorAndSetupBase triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.OpenDoorAndSetupBase".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.OpenDoorAndSetupBase", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.OpenDoorAndSetupBase fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
