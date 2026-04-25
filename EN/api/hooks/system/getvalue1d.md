---
title: GetValue1D
description: Documentation for greg.SYSTEM.GetValue1D
path: /api/hooks/system/getvalue1d
---

# GetValue1D

> **Hook ID:** `greg.SYSTEM.GetValue1D`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.GetValue1D

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::GetValue1D(FlexibleColorPicker.PickerType)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetValue1D` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetValue1D", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetValue1D");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetValue1D", function(payload)
    greg.log("Hook greg.SYSTEM.GetValue1D received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetValue1D fired")

greg.on("greg.SYSTEM.GetValue1D", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetValue1D", (payload) => {
    console.log("Hook greg.SYSTEM.GetValue1D triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetValue1D".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetValue1D", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetValue1D fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
