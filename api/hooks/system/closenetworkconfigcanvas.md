---
title: CloseNetworkConfigCanvas
description: Documentation for greg.SYSTEM.CloseNetworkConfigCanvas
path: /api/hooks/system/closenetworkconfigcanvas
---

# CloseNetworkConfigCanvas

> **Hook ID:** `greg.SYSTEM.CloseNetworkConfigCanvas`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.CloseNetworkConfigCanvas

## Native Signature
```csharp
Il2Cpp.MainGameManager::CloseNetworkConfigCanvas()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CloseNetworkConfigCanvas` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CloseNetworkConfigCanvas", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CloseNetworkConfigCanvas");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CloseNetworkConfigCanvas", function(payload)
    greg.log("Hook greg.SYSTEM.CloseNetworkConfigCanvas received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CloseNetworkConfigCanvas fired")

greg.on("greg.SYSTEM.CloseNetworkConfigCanvas", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CloseNetworkConfigCanvas", (payload) => {
    console.log("Hook greg.SYSTEM.CloseNetworkConfigCanvas triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CloseNetworkConfigCanvas".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CloseNetworkConfigCanvas", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CloseNetworkConfigCanvas fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
