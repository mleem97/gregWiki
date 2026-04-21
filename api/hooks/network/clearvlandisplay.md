---
title: ClearVLANDisplay
description: Documentation for greg.NETWORK.ClearVLANDisplay
path: /api/hooks/network/clearvlandisplay
---

# ClearVLANDisplay

> **Hook ID:** `greg.NETWORK.ClearVLANDisplay`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.ClearVLANDisplay

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::ClearVLANDisplay()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearVLANDisplay` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ClearVLANDisplay", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ClearVLANDisplay");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ClearVLANDisplay", function(payload)
    greg.log("Hook greg.NETWORK.ClearVLANDisplay received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ClearVLANDisplay fired")

greg.on("greg.NETWORK.ClearVLANDisplay", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ClearVLANDisplay", (payload) => {
    console.log("Hook greg.NETWORK.ClearVLANDisplay triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ClearVLANDisplay".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ClearVLANDisplay", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ClearVLANDisplay fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
