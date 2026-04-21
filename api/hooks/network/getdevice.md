---
title: GetDevice
description: Documentation for greg.NETWORK.GetDevice
path: /api/hooks/network/getdevice
---

# GetDevice

> **Hook ID:** `greg.NETWORK.GetDevice`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetDevice

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetDevice(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetDevice` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetDevice", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetDevice");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetDevice", function(payload)
    greg.log("Hook greg.NETWORK.GetDevice received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetDevice fired")

greg.on("greg.NETWORK.GetDevice", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetDevice", (payload) => {
    console.log("Hook greg.NETWORK.GetDevice triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetDevice".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetDevice", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetDevice fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
