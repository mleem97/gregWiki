---
title: SliderUpdate
description: Documentation for greg.SYSTEM.SliderUpdate
path: /api/hooks/system/sliderupdate
---

# SliderUpdate

> **Hook ID:** `greg.SYSTEM.SliderUpdate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.SliderUpdate

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::SliderUpdate(FlexibleColorPicker.PickerType, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SliderUpdate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SliderUpdate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SliderUpdate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SliderUpdate", function(payload)
    greg.log("Hook greg.SYSTEM.SliderUpdate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SliderUpdate fired")

greg.on("greg.SYSTEM.SliderUpdate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SliderUpdate", (payload) => {
    console.log("Hook greg.SYSTEM.SliderUpdate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SliderUpdate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SliderUpdate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SliderUpdate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
