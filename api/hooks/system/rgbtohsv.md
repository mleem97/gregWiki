---
title: RGBToHSV
description: Documentation for greg.SYSTEM.RGBToHSV
path: /api/hooks/system/rgbtohsv
---

# RGBToHSV

> **Hook ID:** `greg.SYSTEM.RGBToHSV`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.RGBToHSV

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::RGBToHSV(float, float, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RGBToHSV` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RGBToHSV", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RGBToHSV");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RGBToHSV", function(payload)
    greg.log("Hook greg.SYSTEM.RGBToHSV received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RGBToHSV fired")

greg.on("greg.SYSTEM.RGBToHSV", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RGBToHSV", (payload) => {
    console.log("Hook greg.SYSTEM.RGBToHSV triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RGBToHSV".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RGBToHSV", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RGBToHSV fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
