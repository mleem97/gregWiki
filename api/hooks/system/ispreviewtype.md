---
title: IsPreviewType
description: Documentation for greg.SYSTEM.IsPreviewType
path: /api/hooks/system/ispreviewtype
---

# IsPreviewType

> **Hook ID:** `greg.SYSTEM.IsPreviewType`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.IsPreviewType

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::IsPreviewType(FlexibleColorPicker.PickerType)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsPreviewType` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsPreviewType", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsPreviewType");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsPreviewType", function(payload)
    greg.log("Hook greg.SYSTEM.IsPreviewType received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsPreviewType fired")

greg.on("greg.SYSTEM.IsPreviewType", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsPreviewType", (payload) => {
    console.log("Hook greg.SYSTEM.IsPreviewType triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsPreviewType".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsPreviewType", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsPreviewType fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
