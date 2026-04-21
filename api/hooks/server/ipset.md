---
title: IPSet
description: Documentation for greg.SERVER.IPSet
path: /api/hooks/server/ipset
---

# IPSet

> **Hook ID:** `greg.SERVER.IPSet`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.SetIP

## Native Signature
```csharp
Il2Cpp.Server::SetIP(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IPSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.IPSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.IPSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.IPSet", function(payload)
    greg.log("Hook greg.SERVER.IPSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.IPSet fired")

greg.on("greg.SERVER.IPSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.IPSet", (payload) => {
    console.log("Hook greg.SERVER.IPSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.IPSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.IPSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.IPSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
