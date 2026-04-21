---
title: ButtonCancelColorPicker
description: Documentation for greg.SYSTEM.ButtonCancelColorPicker
path: /api/hooks/system/buttoncancelcolorpicker
---

# ButtonCancelColorPicker

> **Hook ID:** `greg.SYSTEM.ButtonCancelColorPicker`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonCancelColorPicker

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonCancelColorPicker()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonCancelColorPicker` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonCancelColorPicker", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonCancelColorPicker");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonCancelColorPicker", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonCancelColorPicker received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonCancelColorPicker fired")

greg.on("greg.SYSTEM.ButtonCancelColorPicker", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonCancelColorPicker", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonCancelColorPicker triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonCancelColorPicker".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonCancelColorPicker", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonCancelColorPicker fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
