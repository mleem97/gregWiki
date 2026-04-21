---
title: TurnOnCommonFunction
description: Documentation for greg.SERVER.TurnOnCommonFunction
path: /api/hooks/server/turnoncommonfunction
---

# TurnOnCommonFunction

> **Hook ID:** `greg.SERVER.TurnOnCommonFunction`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.TurnOnCommonFunction

## Native Signature
```csharp
Il2Cpp.Server::TurnOnCommonFunction()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TurnOnCommonFunction` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.TurnOnCommonFunction", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.TurnOnCommonFunction");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.TurnOnCommonFunction", function(payload)
    greg.log("Hook greg.SERVER.TurnOnCommonFunction received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.TurnOnCommonFunction fired")

greg.on("greg.SERVER.TurnOnCommonFunction", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.TurnOnCommonFunction", (payload) => {
    console.log("Hook greg.SERVER.TurnOnCommonFunction triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.TurnOnCommonFunction".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.TurnOnCommonFunction", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.TurnOnCommonFunction fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
