---
title: GetValue
description: Documentation for greg.SYSTEM.GetValue
path: /api/hooks/system/getvalue
---

# GetValue

> **Hook ID:** `greg.SYSTEM.GetValue`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.GetValue

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::GetValue(FlexibleColorPicker.MainPickingMode)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetValue` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetValue", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetValue");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetValue", function(payload)
    greg.log("Hook greg.SYSTEM.GetValue received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetValue fired")

greg.on("greg.SYSTEM.GetValue", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetValue", (payload) => {
    console.log("Hook greg.SYSTEM.GetValue triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetValue".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetValue", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetValue fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
