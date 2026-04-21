---
title: OnLoadingStarted
description: Documentation for greg.SERVER.OnLoadingStarted
path: /api/hooks/server/onloadingstarted
---

# OnLoadingStarted

> **Hook ID:** `greg.SERVER.OnLoadingStarted`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.OnLoadingStarted

## Native Signature
```csharp
Il2Cpp.Server::OnLoadingStarted()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLoadingStarted` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.OnLoadingStarted", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.OnLoadingStarted");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.OnLoadingStarted", function(payload)
    greg.log("Hook greg.SERVER.OnLoadingStarted received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.OnLoadingStarted fired")

greg.on("greg.SERVER.OnLoadingStarted", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.OnLoadingStarted", (payload) => {
    console.log("Hook greg.SERVER.OnLoadingStarted triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.OnLoadingStarted".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.OnLoadingStarted", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.OnLoadingStarted fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
