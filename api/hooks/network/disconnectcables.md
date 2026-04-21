---
title: DisconnectCables
description: Documentation for greg.NETWORK.DisconnectCables
path: /api/hooks/network/disconnectcables
---

# DisconnectCables

> **Hook ID:** `greg.NETWORK.DisconnectCables`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.DisconnectCables

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::DisconnectCables()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisconnectCables` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.DisconnectCables", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.DisconnectCables");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.DisconnectCables", function(payload)
    greg.log("Hook greg.NETWORK.DisconnectCables received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.DisconnectCables fired")

greg.on("greg.NETWORK.DisconnectCables", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.DisconnectCables", (payload) => {
    console.log("Hook greg.NETWORK.DisconnectCables triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.DisconnectCables".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.DisconnectCables", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.DisconnectCables fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
