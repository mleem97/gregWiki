---
title: OpenConfig
description: Documentation for greg.NETWORK.OpenConfig
path: /api/hooks/network/openconfig
---

# OpenConfig

> **Hook ID:** `greg.NETWORK.OpenConfig`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.OpenConfig

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::OpenConfig(NetworkSwitch)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OpenConfig` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.OpenConfig", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.OpenConfig");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.OpenConfig", function(payload)
    greg.log("Hook greg.NETWORK.OpenConfig received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.OpenConfig fired")

greg.on("greg.NETWORK.OpenConfig", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.OpenConfig", (payload) => {
    console.log("Hook greg.NETWORK.OpenConfig triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.OpenConfig".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.OpenConfig", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.OpenConfig fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
