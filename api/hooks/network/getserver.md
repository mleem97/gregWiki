---
title: GetServer
description: Documentation for greg.NETWORK.GetServer
path: /api/hooks/network/getserver
---

# GetServer

> **Hook ID:** `greg.NETWORK.GetServer`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetServer

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetServer(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetServer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetServer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetServer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetServer", function(payload)
    greg.log("Hook greg.NETWORK.GetServer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetServer fired")

greg.on("greg.NETWORK.GetServer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetServer", (payload) => {
    console.log("Hook greg.NETWORK.GetServer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetServer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetServer", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetServer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
