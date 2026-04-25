---
title: ClearWarningSign
description: Documentation for greg.SERVER.ClearWarningSign
path: /api/hooks/server/clearwarningsign
---

# ClearWarningSign

> **Hook ID:** `greg.SERVER.ClearWarningSign`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.ClearWarningSign

## Native Signature
```csharp
Il2Cpp.Server::ClearWarningSign(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearWarningSign` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.ClearWarningSign", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.ClearWarningSign");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.ClearWarningSign", function(payload)
    greg.log("Hook greg.SERVER.ClearWarningSign received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.ClearWarningSign fired")

greg.on("greg.SERVER.ClearWarningSign", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.ClearWarningSign", (payload) => {
    console.log("Hook greg.SERVER.ClearWarningSign triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.ClearWarningSign".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.ClearWarningSign", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.ClearWarningSign fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
