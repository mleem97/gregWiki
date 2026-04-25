---
title: Connect
description: Documentation for greg.NETWORK.Connect
path: /api/hooks/network/connect
---

# Connect

> **Hook ID:** `greg.NETWORK.Connect`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.Connect

## Native Signature
```csharp
Il2Cpp.NetworkMap::Connect(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Connect` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.Connect", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.Connect");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.Connect", function(payload)
    greg.log("Hook greg.NETWORK.Connect received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.Connect fired")

greg.on("greg.NETWORK.Connect", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.Connect", (payload) => {
    console.log("Hook greg.NETWORK.Connect triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.Connect".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.Connect", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.Connect fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
