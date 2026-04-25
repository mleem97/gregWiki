---
title: ServerInsertedInRack
description: Documentation for greg.SERVER.ServerInsertedInRack
path: /api/hooks/server/serverinsertedinrack
---

# ServerInsertedInRack

> **Hook ID:** `greg.SERVER.ServerInsertedInRack`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.ServerInsertedInRack

## Native Signature
```csharp
Il2Cpp.Server::ServerInsertedInRack(ServerSaveData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ServerInsertedInRack` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.ServerInsertedInRack", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.ServerInsertedInRack");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.ServerInsertedInRack", function(payload)
    greg.log("Hook greg.SERVER.ServerInsertedInRack received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.ServerInsertedInRack fired")

greg.on("greg.SERVER.ServerInsertedInRack", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.ServerInsertedInRack", (payload) => {
    console.log("Hook greg.SERVER.ServerInsertedInRack triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.ServerInsertedInRack".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.ServerInsertedInRack", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.ServerInsertedInRack fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
