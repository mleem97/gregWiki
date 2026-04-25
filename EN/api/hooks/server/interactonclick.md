---
title: InteractOnClick
description: Documentation for greg.SERVER.InteractOnClick
path: /api/hooks/server/interactonclick
---

# InteractOnClick

> **Hook ID:** `greg.SERVER.InteractOnClick`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.InteractOnClick

## Native Signature
```csharp
Il2Cpp.Server::InteractOnClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InteractOnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.InteractOnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.InteractOnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.InteractOnClick", function(payload)
    greg.log("Hook greg.SERVER.InteractOnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.InteractOnClick fired")

greg.on("greg.SERVER.InteractOnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.InteractOnClick", (payload) => {
    console.log("Hook greg.SERVER.InteractOnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.InteractOnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.InteractOnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.InteractOnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
