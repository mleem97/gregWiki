---
title: RenderersEnabledSet
description: Documentation for greg.SYSTEM.RenderersEnabledSet
path: /api/hooks/system/renderersenabledset
---

# RenderersEnabledSet

> **Hook ID:** `greg.SYSTEM.RenderersEnabledSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CheckIfTouchingWall.SetRenderersEnabled

## Native Signature
```csharp
Il2Cpp.CheckIfTouchingWall::SetRenderersEnabled(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RenderersEnabledSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RenderersEnabledSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RenderersEnabledSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RenderersEnabledSet", function(payload)
    greg.log("Hook greg.SYSTEM.RenderersEnabledSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RenderersEnabledSet fired")

greg.on("greg.SYSTEM.RenderersEnabledSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RenderersEnabledSet", (payload) => {
    console.log("Hook greg.SYSTEM.RenderersEnabledSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RenderersEnabledSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RenderersEnabledSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RenderersEnabledSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
