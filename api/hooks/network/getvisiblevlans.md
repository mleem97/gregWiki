---
title: GetVisibleVLANs
description: Documentation for greg.NETWORK.GetVisibleVLANs
path: /api/hooks/network/getvisiblevlans
---

# GetVisibleVLANs

> **Hook ID:** `greg.NETWORK.GetVisibleVLANs`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.GetVisibleVLANs

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::GetVisibleVLANs()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetVisibleVLANs` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetVisibleVLANs", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetVisibleVLANs");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetVisibleVLANs", function(payload)
    greg.log("Hook greg.NETWORK.GetVisibleVLANs received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetVisibleVLANs fired")

greg.on("greg.NETWORK.GetVisibleVLANs", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetVisibleVLANs", (payload) => {
    console.log("Hook greg.NETWORK.GetVisibleVLANs triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetVisibleVLANs".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetVisibleVLANs", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetVisibleVLANs fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
