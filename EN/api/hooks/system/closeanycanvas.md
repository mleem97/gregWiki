---
title: CloseAnyCanvas
description: Documentation for greg.SYSTEM.CloseAnyCanvas
path: /api/hooks/system/closeanycanvas
---

# CloseAnyCanvas

> **Hook ID:** `greg.SYSTEM.CloseAnyCanvas`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.CloseAnyCanvas

## Native Signature
```csharp
Il2Cpp.MainGameManager::CloseAnyCanvas(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CloseAnyCanvas` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CloseAnyCanvas", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CloseAnyCanvas");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CloseAnyCanvas", function(payload)
    greg.log("Hook greg.SYSTEM.CloseAnyCanvas received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CloseAnyCanvas fired")

greg.on("greg.SYSTEM.CloseAnyCanvas", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CloseAnyCanvas", (payload) => {
    console.log("Hook greg.SYSTEM.CloseAnyCanvas triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CloseAnyCanvas".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CloseAnyCanvas", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CloseAnyCanvas fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
