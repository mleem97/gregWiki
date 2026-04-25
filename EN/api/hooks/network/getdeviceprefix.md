---
title: GetDevicePrefix
description: Documentation for greg.NETWORK.GetDevicePrefix
path: /api/hooks/network/getdeviceprefix
---

# GetDevicePrefix

> **Hook ID:** `greg.NETWORK.GetDevicePrefix`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.GetDevicePrefix

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::GetDevicePrefix(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetDevicePrefix` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetDevicePrefix", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetDevicePrefix");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetDevicePrefix", function(payload)
    greg.log("Hook greg.NETWORK.GetDevicePrefix received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetDevicePrefix fired")

greg.on("greg.NETWORK.GetDevicePrefix", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetDevicePrefix", (payload) => {
    console.log("Hook greg.NETWORK.GetDevicePrefix triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetDevicePrefix".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetDevicePrefix", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetDevicePrefix fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
