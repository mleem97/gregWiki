---
title: DisconnectCablesWhenSwitchIsOff
description: Documentation for greg.NETWORK.DisconnectCablesWhenSwitchIsOff
path: /api/hooks/network/disconnectcableswhenswitchisoff
---

# DisconnectCablesWhenSwitchIsOff

> **Hook ID:** `greg.NETWORK.DisconnectCablesWhenSwitchIsOff`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.DisconnectCablesWhenSwitchIsOff

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::DisconnectCablesWhenSwitchIsOff()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisconnectCablesWhenSwitchIsOff` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.DisconnectCablesWhenSwitchIsOff");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", function(payload)
    greg.log("Hook greg.NETWORK.DisconnectCablesWhenSwitchIsOff received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.DisconnectCablesWhenSwitchIsOff fired")

greg.on("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", (payload) => {
    console.log("Hook greg.NETWORK.DisconnectCablesWhenSwitchIsOff triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.DisconnectCablesWhenSwitchIsOff".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.DisconnectCablesWhenSwitchIsOff fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
