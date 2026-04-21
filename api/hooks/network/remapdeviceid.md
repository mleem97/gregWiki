---
title: RemapDeviceId
description: Documentation for greg.NETWORK.RemapDeviceId
path: /api/hooks/network/remapdeviceid
---

# RemapDeviceId

> **Hook ID:** `greg.NETWORK.RemapDeviceId`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.RemapDeviceId

## Native Signature
```csharp
Il2Cpp.NetworkMap::RemapDeviceId(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RemapDeviceId` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.RemapDeviceId", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.RemapDeviceId");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.RemapDeviceId", function(payload)
    greg.log("Hook greg.NETWORK.RemapDeviceId received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.RemapDeviceId fired")

greg.on("greg.NETWORK.RemapDeviceId", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.RemapDeviceId", (payload) => {
    console.log("Hook greg.NETWORK.RemapDeviceId triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.RemapDeviceId".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.RemapDeviceId", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.RemapDeviceId fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
