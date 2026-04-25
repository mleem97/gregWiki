---
title: OnLoadingComplete
description: Documentation for greg.SERVER.OnLoadingComplete
path: /api/hooks/server/onloadingcomplete
---

# OnLoadingComplete

> **Hook ID:** `greg.SERVER.OnLoadingComplete`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.OnLoadingComplete

## Native Signature
```csharp
Il2Cpp.Server::OnLoadingComplete()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLoadingComplete` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.OnLoadingComplete", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.OnLoadingComplete");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.OnLoadingComplete", function(payload)
    greg.log("Hook greg.SERVER.OnLoadingComplete received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.OnLoadingComplete fired")

greg.on("greg.SERVER.OnLoadingComplete", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.OnLoadingComplete", (payload) => {
    console.log("Hook greg.SERVER.OnLoadingComplete triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.OnLoadingComplete".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.OnLoadingComplete", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.OnLoadingComplete fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
