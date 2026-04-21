---
title: IsolatedDeviceRemoved
description: Documentation for greg.NETWORK.IsolatedDeviceRemoved
path: /api/hooks/network/isolateddeviceremoved
---

# IsolatedDeviceRemoved

> **Hook ID:** `greg.NETWORK.IsolatedDeviceRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.RemoveIsolatedDevice

## Native Signature
```csharp
Il2Cpp.NetworkMap::RemoveIsolatedDevice(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsolatedDeviceRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.IsolatedDeviceRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.IsolatedDeviceRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.IsolatedDeviceRemoved", function(payload)
    greg.log("Hook greg.NETWORK.IsolatedDeviceRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.IsolatedDeviceRemoved fired")

greg.on("greg.NETWORK.IsolatedDeviceRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.IsolatedDeviceRemoved", (payload) => {
    console.log("Hook greg.NETWORK.IsolatedDeviceRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.IsolatedDeviceRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.IsolatedDeviceRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.IsolatedDeviceRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
