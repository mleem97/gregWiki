---
title: BrokenSwitchRemoved
description: Documentation for greg.NETWORK.BrokenSwitchRemoved
path: /api/hooks/network/brokenswitchremoved
---

# BrokenSwitchRemoved

> **Hook ID:** `greg.NETWORK.BrokenSwitchRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.RemoveBrokenSwitch

## Native Signature
```csharp
Il2Cpp.NetworkMap::RemoveBrokenSwitch(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BrokenSwitchRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.BrokenSwitchRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.BrokenSwitchRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.BrokenSwitchRemoved", function(payload)
    greg.log("Hook greg.NETWORK.BrokenSwitchRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.BrokenSwitchRemoved fired")

greg.on("greg.NETWORK.BrokenSwitchRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.BrokenSwitchRemoved", (payload) => {
    console.log("Hook greg.NETWORK.BrokenSwitchRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.BrokenSwitchRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.BrokenSwitchRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.BrokenSwitchRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
