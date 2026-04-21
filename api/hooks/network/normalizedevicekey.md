---
title: NormalizeDeviceKey
description: Documentation for greg.NETWORK.NormalizeDeviceKey
path: /api/hooks/network/normalizedevicekey
---

# NormalizeDeviceKey

> **Hook ID:** `greg.NETWORK.NormalizeDeviceKey`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.NormalizeDeviceKey

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::NormalizeDeviceKey(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `NormalizeDeviceKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.NormalizeDeviceKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.NormalizeDeviceKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.NormalizeDeviceKey", function(payload)
    greg.log("Hook greg.NETWORK.NormalizeDeviceKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.NormalizeDeviceKey fired")

greg.on("greg.NETWORK.NormalizeDeviceKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.NormalizeDeviceKey", (payload) => {
    console.log("Hook greg.NETWORK.NormalizeDeviceKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.NormalizeDeviceKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.NormalizeDeviceKey", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.NormalizeDeviceKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
