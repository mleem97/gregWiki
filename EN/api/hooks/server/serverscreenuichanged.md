---
title: ServerScreenUIChanged
description: Documentation for greg.SERVER.ServerScreenUIChanged
path: /api/hooks/server/serverscreenuichanged
---

# ServerScreenUIChanged

> **Hook ID:** `greg.SERVER.ServerScreenUIChanged`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.UpdateServerScreenUI

## Native Signature
```csharp
Il2Cpp.Server::UpdateServerScreenUI()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ServerScreenUIChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.ServerScreenUIChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.ServerScreenUIChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.ServerScreenUIChanged", function(payload)
    greg.log("Hook greg.SERVER.ServerScreenUIChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.ServerScreenUIChanged fired")

greg.on("greg.SERVER.ServerScreenUIChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.ServerScreenUIChanged", (payload) => {
    console.log("Hook greg.SERVER.ServerScreenUIChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.ServerScreenUIChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.ServerScreenUIChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.ServerScreenUIChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
