---
title: IsAlphaType
description: Documentation for greg.SYSTEM.IsAlphaType
path: /api/hooks/system/isalphatype
---

# IsAlphaType

> **Hook ID:** `greg.SYSTEM.IsAlphaType`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.IsAlphaType

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::IsAlphaType(FlexibleColorPicker.PickerType)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsAlphaType` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsAlphaType", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsAlphaType");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsAlphaType", function(payload)
    greg.log("Hook greg.SYSTEM.IsAlphaType received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsAlphaType fired")

greg.on("greg.SYSTEM.IsAlphaType", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsAlphaType", (payload) => {
    console.log("Hook greg.SYSTEM.IsAlphaType triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsAlphaType".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsAlphaType", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsAlphaType fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
