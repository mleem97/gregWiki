---
title: GetConnectedDevices
description: Documentation for greg.NETWORK.GetConnectedDevices
path: /api/hooks/network/getconnecteddevices
---

# GetConnectedDevices

> **Hook ID:** `greg.NETWORK.GetConnectedDevices`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.GetConnectedDevices

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::GetConnectedDevices()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetConnectedDevices` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetConnectedDevices", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetConnectedDevices");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetConnectedDevices", function(payload)
    greg.log("Hook greg.NETWORK.GetConnectedDevices received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetConnectedDevices fired")

greg.on("greg.NETWORK.GetConnectedDevices", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetConnectedDevices", (payload) => {
    console.log("Hook greg.NETWORK.GetConnectedDevices triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetConnectedDevices".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetConnectedDevices", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetConnectedDevices fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
