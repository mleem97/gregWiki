---
title: MakeModeOptions
description: Documentation for greg.SYSTEM.MakeModeOptions
path: /api/hooks/system/makemodeoptions
---

# MakeModeOptions

> **Hook ID:** `greg.SYSTEM.MakeModeOptions`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.MakeModeOptions

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::MakeModeOptions()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MakeModeOptions` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MakeModeOptions", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MakeModeOptions");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MakeModeOptions", function(payload)
    greg.log("Hook greg.SYSTEM.MakeModeOptions received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MakeModeOptions fired")

greg.on("greg.SYSTEM.MakeModeOptions", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MakeModeOptions", (payload) => {
    console.log("Hook greg.SYSTEM.MakeModeOptions triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MakeModeOptions".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MakeModeOptions", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MakeModeOptions fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
