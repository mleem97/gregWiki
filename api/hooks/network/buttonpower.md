---
title: ButtonPower
description: Documentation for greg.NETWORK.ButtonPower
path: /api/hooks/network/buttonpower
---

# ButtonPower

> **Hook ID:** `greg.NETWORK.ButtonPower`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.ButtonPower

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::ButtonPower()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonPower` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ButtonPower", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ButtonPower");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ButtonPower", function(payload)
    greg.log("Hook greg.NETWORK.ButtonPower received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ButtonPower fired")

greg.on("greg.NETWORK.ButtonPower", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ButtonPower", (payload) => {
    console.log("Hook greg.NETWORK.ButtonPower triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ButtonPower".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ButtonPower", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ButtonPower fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
