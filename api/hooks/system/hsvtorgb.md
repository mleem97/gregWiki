---
title: HSVToRGB
description: Documentation for greg.SYSTEM.HSVToRGB
path: /api/hooks/system/hsvtorgb
---

# HSVToRGB

> **Hook ID:** `greg.SYSTEM.HSVToRGB`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.HSVToRGB

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::HSVToRGB(float, float, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HSVToRGB` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HSVToRGB", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HSVToRGB");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HSVToRGB", function(payload)
    greg.log("Hook greg.SYSTEM.HSVToRGB received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HSVToRGB fired")

greg.on("greg.SYSTEM.HSVToRGB", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HSVToRGB", (payload) => {
    console.log("Hook greg.SYSTEM.HSVToRGB triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HSVToRGB".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HSVToRGB", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HSVToRGB fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
