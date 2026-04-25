---
title: GetAllDevices
description: Documentation for greg.NETWORK.GetAllDevices
path: /api/hooks/network/getalldevices
---

# GetAllDevices

> **Hook ID:** `greg.NETWORK.GetAllDevices`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetAllDevices

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetAllDevices()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAllDevices` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetAllDevices", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetAllDevices");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetAllDevices", function(payload)
    greg.log("Hook greg.NETWORK.GetAllDevices received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetAllDevices fired")

greg.on("greg.NETWORK.GetAllDevices", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetAllDevices", (payload) => {
    console.log("Hook greg.NETWORK.GetAllDevices triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetAllDevices".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetAllDevices", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetAllDevices fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
