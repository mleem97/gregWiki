---
title: CloseCanvas
description: Documentation for greg.SYSTEM.CloseCanvas
path: /api/hooks/system/closecanvas
---

# CloseCanvas

> **Hook ID:** `greg.SYSTEM.CloseCanvas`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.CloseCanvas

## Native Signature
```csharp
Il2Cpp.SetIP::CloseCanvas()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CloseCanvas` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CloseCanvas", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CloseCanvas");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CloseCanvas", function(payload)
    greg.log("Hook greg.SYSTEM.CloseCanvas received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CloseCanvas fired")

greg.on("greg.SYSTEM.CloseCanvas", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CloseCanvas", (payload) => {
    console.log("Hook greg.SYSTEM.CloseCanvas triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CloseCanvas".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CloseCanvas", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CloseCanvas fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
