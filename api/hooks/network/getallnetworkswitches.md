---
title: GetAllNetworkSwitches
description: Documentation for greg.NETWORK.GetAllNetworkSwitches
path: /api/hooks/network/getallnetworkswitches
---

# GetAllNetworkSwitches

> **Hook ID:** `greg.NETWORK.GetAllNetworkSwitches`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetAllNetworkSwitches

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetAllNetworkSwitches()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAllNetworkSwitches` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetAllNetworkSwitches", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetAllNetworkSwitches");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetAllNetworkSwitches", function(payload)
    greg.log("Hook greg.NETWORK.GetAllNetworkSwitches received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetAllNetworkSwitches fired")

greg.on("greg.NETWORK.GetAllNetworkSwitches", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetAllNetworkSwitches", (payload) => {
    console.log("Hook greg.NETWORK.GetAllNetworkSwitches triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetAllNetworkSwitches".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetAllNetworkSwitches", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetAllNetworkSwitches fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
