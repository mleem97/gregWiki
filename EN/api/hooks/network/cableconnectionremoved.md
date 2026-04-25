---
title: CableConnectionRemoved
description: Documentation for greg.NETWORK.CableConnectionRemoved
path: /api/hooks/network/cableconnectionremoved
---

# CableConnectionRemoved

> **Hook ID:** `greg.NETWORK.CableConnectionRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.RemoveCableConnection

## Native Signature
```csharp
Il2Cpp.NetworkMap::RemoveCableConnection(int, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CableConnectionRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CableConnectionRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CableConnectionRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CableConnectionRemoved", function(payload)
    greg.log("Hook greg.NETWORK.CableConnectionRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CableConnectionRemoved fired")

greg.on("greg.NETWORK.CableConnectionRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CableConnectionRemoved", (payload) => {
    console.log("Hook greg.NETWORK.CableConnectionRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CableConnectionRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CableConnectionRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CableConnectionRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
