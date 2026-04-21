---
title: FindAllRoutes
description: Documentation for greg.NETWORK.FindAllRoutes
path: /api/hooks/network/findallroutes
---

# FindAllRoutes

> **Hook ID:** `greg.NETWORK.FindAllRoutes`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.FindAllRoutes

## Native Signature
```csharp
Il2Cpp.NetworkMap::FindAllRoutes(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FindAllRoutes` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.FindAllRoutes", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.FindAllRoutes");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.FindAllRoutes", function(payload)
    greg.log("Hook greg.NETWORK.FindAllRoutes received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.FindAllRoutes fired")

greg.on("greg.NETWORK.FindAllRoutes", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.FindAllRoutes", (payload) => {
    console.log("Hook greg.NETWORK.FindAllRoutes triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.FindAllRoutes".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.FindAllRoutes", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.FindAllRoutes fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
