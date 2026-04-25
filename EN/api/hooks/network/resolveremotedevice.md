---
title: ResolveRemoteDevice
description: Documentation for greg.NETWORK.ResolveRemoteDevice
path: /api/hooks/network/resolveremotedevice
---

# ResolveRemoteDevice

> **Hook ID:** `greg.NETWORK.ResolveRemoteDevice`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.ResolveRemoteDevice

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::ResolveRemoteDevice(CableLink)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResolveRemoteDevice` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ResolveRemoteDevice", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ResolveRemoteDevice");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ResolveRemoteDevice", function(payload)
    greg.log("Hook greg.NETWORK.ResolveRemoteDevice received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ResolveRemoteDevice fired")

greg.on("greg.NETWORK.ResolveRemoteDevice", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ResolveRemoteDevice", (payload) => {
    console.log("Hook greg.NETWORK.ResolveRemoteDevice triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ResolveRemoteDevice".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ResolveRemoteDevice", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ResolveRemoteDevice fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
