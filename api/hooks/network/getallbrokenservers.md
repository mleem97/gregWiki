---
title: GetAllBrokenServers
description: Documentation for greg.NETWORK.GetAllBrokenServers
path: /api/hooks/network/getallbrokenservers
---

# GetAllBrokenServers

> **Hook ID:** `greg.NETWORK.GetAllBrokenServers`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetAllBrokenServers

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetAllBrokenServers()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAllBrokenServers` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetAllBrokenServers", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetAllBrokenServers");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetAllBrokenServers", function(payload)
    greg.log("Hook greg.NETWORK.GetAllBrokenServers received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetAllBrokenServers fired")

greg.on("greg.NETWORK.GetAllBrokenServers", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetAllBrokenServers", (payload) => {
    console.log("Hook greg.NETWORK.GetAllBrokenServers triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetAllBrokenServers".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetAllBrokenServers", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetAllBrokenServers fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
