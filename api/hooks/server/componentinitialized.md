---
title: ComponentInitialized
description: Documentation for greg.SERVER.ComponentInitialized
path: /api/hooks/server/componentinitialized
---

# ComponentInitialized

> **Hook ID:** `greg.SERVER.ComponentInitialized`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.Start

## Native Signature
```csharp
Il2Cpp.Server::Start()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ComponentInitialized` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.ComponentInitialized", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.ComponentInitialized");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.ComponentInitialized", function(payload)
    greg.log("Hook greg.SERVER.ComponentInitialized received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.ComponentInitialized fired")

greg.on("greg.SERVER.ComponentInitialized", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.ComponentInitialized", (payload) => {
    console.log("Hook greg.SERVER.ComponentInitialized triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.ComponentInitialized".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.ComponentInitialized", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.ComponentInitialized fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
