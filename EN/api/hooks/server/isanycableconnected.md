---
title: IsAnyCableConnected
description: Documentation for greg.SERVER.IsAnyCableConnected
path: /api/hooks/server/isanycableconnected
---

# IsAnyCableConnected

> **Hook ID:** `greg.SERVER.IsAnyCableConnected`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.IsAnyCableConnected

## Native Signature
```csharp
Il2Cpp.Server::IsAnyCableConnected()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsAnyCableConnected` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.IsAnyCableConnected", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.IsAnyCableConnected");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.IsAnyCableConnected", function(payload)
    greg.log("Hook greg.SERVER.IsAnyCableConnected received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.IsAnyCableConnected fired")

greg.on("greg.SERVER.IsAnyCableConnected", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.IsAnyCableConnected", (payload) => {
    console.log("Hook greg.SERVER.IsAnyCableConnected triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.IsAnyCableConnected".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.IsAnyCableConnected", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.IsAnyCableConnected fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
