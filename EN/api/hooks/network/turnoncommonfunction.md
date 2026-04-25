---
title: TurnOnCommonFunction
description: Documentation for greg.NETWORK.TurnOnCommonFunction
path: /api/hooks/network/turnoncommonfunction
---

# TurnOnCommonFunction

> **Hook ID:** `greg.NETWORK.TurnOnCommonFunction`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.TurnOnCommonFunction

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::TurnOnCommonFunction()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TurnOnCommonFunction` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.TurnOnCommonFunction", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.TurnOnCommonFunction");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.TurnOnCommonFunction", function(payload)
    greg.log("Hook greg.NETWORK.TurnOnCommonFunction received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.TurnOnCommonFunction fired")

greg.on("greg.NETWORK.TurnOnCommonFunction", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.TurnOnCommonFunction", (payload) => {
    console.log("Hook greg.NETWORK.TurnOnCommonFunction triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.TurnOnCommonFunction".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.TurnOnCommonFunction", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.TurnOnCommonFunction fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
