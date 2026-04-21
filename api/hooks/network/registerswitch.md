---
title: RegisterSwitch
description: Documentation for greg.NETWORK.RegisterSwitch
path: /api/hooks/network/registerswitch
---

# RegisterSwitch

> **Hook ID:** `greg.NETWORK.RegisterSwitch`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.RegisterSwitch

## Native Signature
```csharp
Il2Cpp.NetworkMap::RegisterSwitch(NetworkSwitch)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RegisterSwitch` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.RegisterSwitch", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.RegisterSwitch");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.RegisterSwitch", function(payload)
    greg.log("Hook greg.NETWORK.RegisterSwitch received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.RegisterSwitch fired")

greg.on("greg.NETWORK.RegisterSwitch", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.RegisterSwitch", (payload) => {
    console.log("Hook greg.NETWORK.RegisterSwitch triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.RegisterSwitch".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.RegisterSwitch", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.RegisterSwitch fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
