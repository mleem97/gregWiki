---
title: ClearSpriteNextToPointer
description: Documentation for greg.SYSTEM.ClearSpriteNextToPointer
path: /api/hooks/system/clearspritenexttopointer
---

# ClearSpriteNextToPointer

> **Hook ID:** `greg.SYSTEM.ClearSpriteNextToPointer`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.ClearSpriteNextToPointer

## Native Signature
```csharp
Il2Cpp.StaticUIElements::ClearSpriteNextToPointer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearSpriteNextToPointer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClearSpriteNextToPointer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClearSpriteNextToPointer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClearSpriteNextToPointer", function(payload)
    greg.log("Hook greg.SYSTEM.ClearSpriteNextToPointer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClearSpriteNextToPointer fired")

greg.on("greg.SYSTEM.ClearSpriteNextToPointer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClearSpriteNextToPointer", (payload) => {
    console.log("Hook greg.SYSTEM.ClearSpriteNextToPointer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClearSpriteNextToPointer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClearSpriteNextToPointer", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClearSpriteNextToPointer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
