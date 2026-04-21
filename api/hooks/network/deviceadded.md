---
title: DeviceAdded
description: Documentation for greg.NETWORK.DeviceAdded
path: /api/hooks/network/deviceadded
---

# DeviceAdded

> **Hook ID:** `greg.NETWORK.DeviceAdded`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.AddDevice

## Native Signature
```csharp
Il2Cpp.NetworkMap::AddDevice(string, CableLink.TypeOfLink, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DeviceAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.DeviceAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.DeviceAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.DeviceAdded", function(payload)
    greg.log("Hook greg.NETWORK.DeviceAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.DeviceAdded fired")

greg.on("greg.NETWORK.DeviceAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.DeviceAdded", (payload) => {
    console.log("Hook greg.NETWORK.DeviceAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.DeviceAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.DeviceAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.DeviceAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
