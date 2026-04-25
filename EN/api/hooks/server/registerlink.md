---
title: RegisterLink
description: Documentation for greg.SERVER.RegisterLink
path: /api/hooks/server/registerlink
---

# RegisterLink

> **Hook ID:** `greg.SERVER.RegisterLink`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.RegisterLink

## Native Signature
```csharp
Il2Cpp.Server::RegisterLink(CableLink)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RegisterLink` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.RegisterLink", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.RegisterLink");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.RegisterLink", function(payload)
    greg.log("Hook greg.SERVER.RegisterLink received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.RegisterLink fired")

greg.on("greg.SERVER.RegisterLink", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.RegisterLink", (payload) => {
    console.log("Hook greg.SERVER.RegisterLink triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.RegisterLink".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.RegisterLink", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.RegisterLink fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
