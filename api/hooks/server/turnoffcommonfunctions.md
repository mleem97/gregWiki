---
title: TurnOffCommonFunctions
description: Documentation for greg.SERVER.TurnOffCommonFunctions
path: /api/hooks/server/turnoffcommonfunctions
---

# TurnOffCommonFunctions

> **Hook ID:** `greg.SERVER.TurnOffCommonFunctions`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.TurnOffCommonFunctions

## Native Signature
```csharp
Il2Cpp.Server::TurnOffCommonFunctions()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TurnOffCommonFunctions` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.TurnOffCommonFunctions", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.TurnOffCommonFunctions");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.TurnOffCommonFunctions", function(payload)
    greg.log("Hook greg.SERVER.TurnOffCommonFunctions received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.TurnOffCommonFunctions fired")

greg.on("greg.SERVER.TurnOffCommonFunctions", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.TurnOffCommonFunctions", (payload) => {
    console.log("Hook greg.SERVER.TurnOffCommonFunctions triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.TurnOffCommonFunctions".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.TurnOffCommonFunctions", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.TurnOffCommonFunctions fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
