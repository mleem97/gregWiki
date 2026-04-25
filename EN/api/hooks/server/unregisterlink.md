---
title: UnregisterLink
description: Documentation for greg.SERVER.UnregisterLink
path: /api/hooks/server/unregisterlink
---

# UnregisterLink

> **Hook ID:** `greg.SERVER.UnregisterLink`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.UnregisterLink

## Native Signature
```csharp
Il2Cpp.Server::UnregisterLink(CableLink)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UnregisterLink` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.UnregisterLink", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.UnregisterLink");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.UnregisterLink", function(payload)
    greg.log("Hook greg.SERVER.UnregisterLink received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.UnregisterLink fired")

greg.on("greg.SERVER.UnregisterLink", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.UnregisterLink", (payload) => {
    console.log("Hook greg.SERVER.UnregisterLink triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.UnregisterLink".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.UnregisterLink", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.UnregisterLink fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
