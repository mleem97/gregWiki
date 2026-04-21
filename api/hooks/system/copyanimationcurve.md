---
title: CopyAnimationCurve
description: Documentation for greg.SYSTEM.CopyAnimationCurve
path: /api/hooks/system/copyanimationcurve
---

# CopyAnimationCurve

> **Hook ID:** `greg.SYSTEM.CopyAnimationCurve`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/WarpTextExample.CopyAnimationCurve

## Native Signature
```csharp
Il2Cpp.WarpTextExample::CopyAnimationCurve(AnimationCurve)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CopyAnimationCurve` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CopyAnimationCurve", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CopyAnimationCurve");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CopyAnimationCurve", function(payload)
    greg.log("Hook greg.SYSTEM.CopyAnimationCurve received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CopyAnimationCurve fired")

greg.on("greg.SYSTEM.CopyAnimationCurve", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CopyAnimationCurve", (payload) => {
    console.log("Hook greg.SYSTEM.CopyAnimationCurve triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CopyAnimationCurve".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CopyAnimationCurve", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CopyAnimationCurve fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
