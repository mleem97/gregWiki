---
title: ButtonShowNetworkSwitchConfig
description: Documentation for greg.NETWORK.ButtonShowNetworkSwitchConfig
path: /api/hooks/network/buttonshownetworkswitchconfig
---

# ButtonShowNetworkSwitchConfig

> **Hook ID:** `greg.NETWORK.ButtonShowNetworkSwitchConfig`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.ButtonShowNetworkSwitchConfig

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::ButtonShowNetworkSwitchConfig()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonShowNetworkSwitchConfig` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ButtonShowNetworkSwitchConfig", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ButtonShowNetworkSwitchConfig");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ButtonShowNetworkSwitchConfig", function(payload)
    greg.log("Hook greg.NETWORK.ButtonShowNetworkSwitchConfig received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ButtonShowNetworkSwitchConfig fired")

greg.on("greg.NETWORK.ButtonShowNetworkSwitchConfig", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ButtonShowNetworkSwitchConfig", (payload) => {
    console.log("Hook greg.NETWORK.ButtonShowNetworkSwitchConfig triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ButtonShowNetworkSwitchConfig".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ButtonShowNetworkSwitchConfig", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ButtonShowNetworkSwitchConfig fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
