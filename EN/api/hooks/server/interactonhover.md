---
title: InteractOnHover
description: Documentation for greg.SERVER.InteractOnHover
path: /api/hooks/server/interactonhover
---

# InteractOnHover

> **Hook ID:** `greg.SERVER.InteractOnHover`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.InteractOnHover

## Native Signature
```csharp
Il2Cpp.Server::InteractOnHover(RaycastHit)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InteractOnHover` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.InteractOnHover", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.InteractOnHover");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.InteractOnHover", function(payload)
    greg.log("Hook greg.SERVER.InteractOnHover received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.InteractOnHover fired")

greg.on("greg.SERVER.InteractOnHover", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.InteractOnHover", (payload) => {
    console.log("Hook greg.SERVER.InteractOnHover triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.InteractOnHover".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.InteractOnHover", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.InteractOnHover fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
