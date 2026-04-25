---
title: DeviceRemoved
description: Documentation for greg.NETWORK.DeviceRemoved
path: /api/hooks/network/deviceremoved
---

# DeviceRemoved

> **Hook ID:** `greg.NETWORK.DeviceRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.RemoveDevice

## Native Signature
```csharp
Il2Cpp.NetworkMap::RemoveDevice(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DeviceRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.DeviceRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.DeviceRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.DeviceRemoved", function(payload)
    greg.log("Hook greg.NETWORK.DeviceRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.DeviceRemoved fired")

greg.on("greg.NETWORK.DeviceRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.DeviceRemoved", (payload) => {
    console.log("Hook greg.NETWORK.DeviceRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.DeviceRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.DeviceRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.DeviceRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
