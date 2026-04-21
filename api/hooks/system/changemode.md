---
title: ChangeMode
description: Documentation for greg.SYSTEM.ChangeMode
path: /api/hooks/system/changemode
---

# ChangeMode

> **Hook ID:** `greg.SYSTEM.ChangeMode`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.ChangeMode

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::ChangeMode(FlexibleColorPicker.MainPickingMode)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ChangeMode` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ChangeMode", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ChangeMode");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ChangeMode", function(payload)
    greg.log("Hook greg.SYSTEM.ChangeMode received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ChangeMode fired")

greg.on("greg.SYSTEM.ChangeMode", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ChangeMode", (payload) => {
    console.log("Hook greg.SYSTEM.ChangeMode triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ChangeMode".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ChangeMode", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ChangeMode fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
