---
title: ShowSpriteNextToPointer
description: Documentation for greg.SYSTEM.ShowSpriteNextToPointer
path: /api/hooks/system/showspritenexttopointer
---

# ShowSpriteNextToPointer

> **Hook ID:** `greg.SYSTEM.ShowSpriteNextToPointer`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.ShowSpriteNextToPointer

## Native Signature
```csharp
Il2Cpp.StaticUIElements::ShowSpriteNextToPointer(Sprite)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowSpriteNextToPointer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShowSpriteNextToPointer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShowSpriteNextToPointer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShowSpriteNextToPointer", function(payload)
    greg.log("Hook greg.SYSTEM.ShowSpriteNextToPointer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShowSpriteNextToPointer fired")

greg.on("greg.SYSTEM.ShowSpriteNextToPointer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShowSpriteNextToPointer", (payload) => {
    console.log("Hook greg.SYSTEM.ShowSpriteNextToPointer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShowSpriteNextToPointer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShowSpriteNextToPointer", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShowSpriteNextToPointer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
