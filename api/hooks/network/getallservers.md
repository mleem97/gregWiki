---
title: GetAllServers
description: Documentation for greg.NETWORK.GetAllServers
path: /api/hooks/network/getallservers
---

# GetAllServers

> **Hook ID:** `greg.NETWORK.GetAllServers`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetAllServers

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetAllServers()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAllServers` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetAllServers", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetAllServers");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetAllServers", function(payload)
    greg.log("Hook greg.NETWORK.GetAllServers received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetAllServers fired")

greg.on("greg.NETWORK.GetAllServers", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetAllServers", (payload) => {
    console.log("Hook greg.NETWORK.GetAllServers triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetAllServers".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetAllServers", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetAllServers fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
