---
title: GetNumberOfDevices
description: Documentation for greg.NETWORK.GetNumberOfDevices
path: /api/hooks/network/getnumberofdevices
---

# GetNumberOfDevices

> **Hook ID:** `greg.NETWORK.GetNumberOfDevices`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetNumberOfDevices

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetNumberOfDevices()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetNumberOfDevices` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetNumberOfDevices", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetNumberOfDevices");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetNumberOfDevices", function(payload)
    greg.log("Hook greg.NETWORK.GetNumberOfDevices received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetNumberOfDevices fired")

greg.on("greg.NETWORK.GetNumberOfDevices", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetNumberOfDevices", (payload) => {
    console.log("Hook greg.NETWORK.GetNumberOfDevices triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetNumberOfDevices".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetNumberOfDevices", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetNumberOfDevices fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
