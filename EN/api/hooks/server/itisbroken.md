---
title: ItIsBroken
description: Documentation for greg.SERVER.ItIsBroken
path: /api/hooks/server/itisbroken
---

# ItIsBroken

> **Hook ID:** `greg.SERVER.ItIsBroken`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.ItIsBroken

## Native Signature
```csharp
Il2Cpp.Server::ItIsBroken()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ItIsBroken` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.ItIsBroken", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.ItIsBroken");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.ItIsBroken", function(payload)
    greg.log("Hook greg.SERVER.ItIsBroken received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.ItIsBroken fired")

greg.on("greg.SERVER.ItIsBroken", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.ItIsBroken", (payload) => {
    console.log("Hook greg.SERVER.ItIsBroken triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.ItIsBroken".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.ItIsBroken", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.ItIsBroken fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
