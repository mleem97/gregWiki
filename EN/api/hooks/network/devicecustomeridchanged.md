---
title: DeviceCustomerIDChanged
description: Documentation for greg.NETWORK.DeviceCustomerIDChanged
path: /api/hooks/network/devicecustomeridchanged
---

# DeviceCustomerIDChanged

> **Hook ID:** `greg.NETWORK.DeviceCustomerIDChanged`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.UpdateDeviceCustomerID

## Native Signature
```csharp
Il2Cpp.NetworkMap::UpdateDeviceCustomerID(string, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DeviceCustomerIDChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.DeviceCustomerIDChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.DeviceCustomerIDChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.DeviceCustomerIDChanged", function(payload)
    greg.log("Hook greg.NETWORK.DeviceCustomerIDChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.DeviceCustomerIDChanged fired")

greg.on("greg.NETWORK.DeviceCustomerIDChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.DeviceCustomerIDChanged", (payload) => {
    console.log("Hook greg.NETWORK.DeviceCustomerIDChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.DeviceCustomerIDChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.DeviceCustomerIDChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.DeviceCustomerIDChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
