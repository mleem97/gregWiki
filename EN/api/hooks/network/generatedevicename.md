---
title: GenerateDeviceName
description: Documentation for greg.NETWORK.GenerateDeviceName
path: /api/hooks/network/generatedevicename
---

# GenerateDeviceName

> **Hook ID:** `greg.NETWORK.GenerateDeviceName`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GenerateDeviceName

## Native Signature
```csharp
Il2Cpp.NetworkMap::GenerateDeviceName(CableLink.TypeOfLink, Vector3)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GenerateDeviceName` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GenerateDeviceName", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GenerateDeviceName");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GenerateDeviceName", function(payload)
    greg.log("Hook greg.NETWORK.GenerateDeviceName received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GenerateDeviceName fired")

greg.on("greg.NETWORK.GenerateDeviceName", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GenerateDeviceName", (payload) => {
    console.log("Hook greg.NETWORK.GenerateDeviceName triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GenerateDeviceName".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GenerateDeviceName", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GenerateDeviceName fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
