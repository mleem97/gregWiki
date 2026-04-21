---
title: AppIDChanged
description: Documentation for greg.SERVER.AppIDChanged
path: /api/hooks/server/appidchanged
---

# AppIDChanged

> **Hook ID:** `greg.SERVER.AppIDChanged`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.UpdateAppID

## Native Signature
```csharp
Il2Cpp.Server::UpdateAppID(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AppIDChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.AppIDChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.AppIDChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.AppIDChanged", function(payload)
    greg.log("Hook greg.SERVER.AppIDChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.AppIDChanged fired")

greg.on("greg.SERVER.AppIDChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.AppIDChanged", (payload) => {
    console.log("Hook greg.SERVER.AppIDChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.AppIDChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.AppIDChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.AppIDChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
