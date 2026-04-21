---
title: DynamicChanged
description: Documentation for greg.SYSTEM.DynamicChanged
path: /api/hooks/system/dynamicchanged
---

# DynamicChanged

> **Hook ID:** `greg.SYSTEM.DynamicChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.UpdateDynamic

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::UpdateDynamic(FlexibleColorPicker.PickerType)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DynamicChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DynamicChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DynamicChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DynamicChanged", function(payload)
    greg.log("Hook greg.SYSTEM.DynamicChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DynamicChanged fired")

greg.on("greg.SYSTEM.DynamicChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DynamicChanged", (payload) => {
    console.log("Hook greg.SYSTEM.DynamicChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DynamicChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DynamicChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DynamicChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
