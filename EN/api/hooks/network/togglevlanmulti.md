---
title: ToggleVLANMulti
description: Documentation for greg.NETWORK.ToggleVLANMulti
path: /api/hooks/network/togglevlanmulti
---

# ToggleVLANMulti

> **Hook ID:** `greg.NETWORK.ToggleVLANMulti`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.ToggleVLANMulti

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::ToggleVLANMulti(List<int>, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ToggleVLANMulti` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ToggleVLANMulti", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ToggleVLANMulti");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ToggleVLANMulti", function(payload)
    greg.log("Hook greg.NETWORK.ToggleVLANMulti received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ToggleVLANMulti fired")

greg.on("greg.NETWORK.ToggleVLANMulti", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ToggleVLANMulti", (payload) => {
    console.log("Hook greg.NETWORK.ToggleVLANMulti triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ToggleVLANMulti".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ToggleVLANMulti", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ToggleVLANMulti fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
