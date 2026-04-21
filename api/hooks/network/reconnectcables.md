---
title: ReconnectCables
description: Documentation for greg.NETWORK.ReconnectCables
path: /api/hooks/network/reconnectcables
---

# ReconnectCables

> **Hook ID:** `greg.NETWORK.ReconnectCables`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.ReconnectCables

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::ReconnectCables()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReconnectCables` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ReconnectCables", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ReconnectCables");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ReconnectCables", function(payload)
    greg.log("Hook greg.NETWORK.ReconnectCables received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ReconnectCables fired")

greg.on("greg.NETWORK.ReconnectCables", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ReconnectCables", (payload) => {
    console.log("Hook greg.NETWORK.ReconnectCables triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ReconnectCables".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ReconnectCables", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ReconnectCables fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
