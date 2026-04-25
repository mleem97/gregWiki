---
title: MotionBlurSet
description: Documentation for greg.UI.MotionBlurSet
path: /api/hooks/ui/motionblurset
---

# MotionBlurSet

> **Hook ID:** `greg.UI.MotionBlurSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetMotionBlur

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetMotionBlur(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MotionBlurSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.MotionBlurSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.MotionBlurSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.MotionBlurSet", function(payload)
    greg.log("Hook greg.UI.MotionBlurSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.MotionBlurSet fired")

greg.on("greg.UI.MotionBlurSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.MotionBlurSet", (payload) => {
    console.log("Hook greg.UI.MotionBlurSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.MotionBlurSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.MotionBlurSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.MotionBlurSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
