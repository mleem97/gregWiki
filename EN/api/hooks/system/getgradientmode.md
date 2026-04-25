---
title: GetGradientMode
description: Documentation for greg.SYSTEM.GetGradientMode
path: /api/hooks/system/getgradientmode
---

# GetGradientMode

> **Hook ID:** `greg.SYSTEM.GetGradientMode`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.GetGradientMode

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::GetGradientMode(FlexibleColorPicker.PickerType)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetGradientMode` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetGradientMode", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetGradientMode");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetGradientMode", function(payload)
    greg.log("Hook greg.SYSTEM.GetGradientMode received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetGradientMode fired")

greg.on("greg.SYSTEM.GetGradientMode", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetGradientMode", (payload) => {
    console.log("Hook greg.SYSTEM.GetGradientMode triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetGradientMode".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetGradientMode", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetGradientMode fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
