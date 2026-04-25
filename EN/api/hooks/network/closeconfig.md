---
title: CloseConfig
description: Documentation for greg.NETWORK.CloseConfig
path: /api/hooks/network/closeconfig
---

# CloseConfig

> **Hook ID:** `greg.NETWORK.CloseConfig`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.CloseConfig

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::CloseConfig()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CloseConfig` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CloseConfig", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CloseConfig");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CloseConfig", function(payload)
    greg.log("Hook greg.NETWORK.CloseConfig received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CloseConfig fired")

greg.on("greg.NETWORK.CloseConfig", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CloseConfig", (payload) => {
    console.log("Hook greg.NETWORK.CloseConfig triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CloseConfig".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CloseConfig", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CloseConfig fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
