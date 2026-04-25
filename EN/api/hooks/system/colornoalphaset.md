---
title: ColorNoAlphaSet
description: Documentation for greg.SYSTEM.ColorNoAlphaSet
path: /api/hooks/system/colornoalphaset
---

# ColorNoAlphaSet

> **Hook ID:** `greg.SYSTEM.ColorNoAlphaSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.SetColorNoAlpha

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::SetColorNoAlpha(Color)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ColorNoAlphaSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ColorNoAlphaSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ColorNoAlphaSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ColorNoAlphaSet", function(payload)
    greg.log("Hook greg.SYSTEM.ColorNoAlphaSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ColorNoAlphaSet fired")

greg.on("greg.SYSTEM.ColorNoAlphaSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ColorNoAlphaSet", (payload) => {
    console.log("Hook greg.SYSTEM.ColorNoAlphaSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ColorNoAlphaSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ColorNoAlphaSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ColorNoAlphaSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
