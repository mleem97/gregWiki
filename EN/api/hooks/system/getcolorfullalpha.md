---
title: GetColorFullAlpha
description: Documentation for greg.SYSTEM.GetColorFullAlpha
path: /api/hooks/system/getcolorfullalpha
---

# GetColorFullAlpha

> **Hook ID:** `greg.SYSTEM.GetColorFullAlpha`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.GetColorFullAlpha

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::GetColorFullAlpha()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetColorFullAlpha` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetColorFullAlpha", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetColorFullAlpha");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetColorFullAlpha", function(payload)
    greg.log("Hook greg.SYSTEM.GetColorFullAlpha received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetColorFullAlpha fired")

greg.on("greg.SYSTEM.GetColorFullAlpha", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetColorFullAlpha", (payload) => {
    console.log("Hook greg.SYSTEM.GetColorFullAlpha triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetColorFullAlpha".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetColorFullAlpha", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetColorFullAlpha fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
