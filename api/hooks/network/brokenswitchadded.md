---
title: BrokenSwitchAdded
description: Documentation for greg.NETWORK.BrokenSwitchAdded
path: /api/hooks/network/brokenswitchadded
---

# BrokenSwitchAdded

> **Hook ID:** `greg.NETWORK.BrokenSwitchAdded`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.AddBrokenSwitch

## Native Signature
```csharp
Il2Cpp.NetworkMap::AddBrokenSwitch(NetworkSwitch)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BrokenSwitchAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.BrokenSwitchAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.BrokenSwitchAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.BrokenSwitchAdded", function(payload)
    greg.log("Hook greg.NETWORK.BrokenSwitchAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.BrokenSwitchAdded fired")

greg.on("greg.NETWORK.BrokenSwitchAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.BrokenSwitchAdded", (payload) => {
    console.log("Hook greg.NETWORK.BrokenSwitchAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.BrokenSwitchAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.BrokenSwitchAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.BrokenSwitchAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
