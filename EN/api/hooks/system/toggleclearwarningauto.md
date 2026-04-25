---
title: ToggleClearWarningAuto
description: Documentation for greg.SYSTEM.ToggleClearWarningAuto
path: /api/hooks/system/toggleclearwarningauto
---

# ToggleClearWarningAuto

> **Hook ID:** `greg.SYSTEM.ToggleClearWarningAuto`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CommandCenter.ToggleClearWarningAuto

## Native Signature
```csharp
Il2Cpp.CommandCenter::ToggleClearWarningAuto(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ToggleClearWarningAuto` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ToggleClearWarningAuto", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ToggleClearWarningAuto");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ToggleClearWarningAuto", function(payload)
    greg.log("Hook greg.SYSTEM.ToggleClearWarningAuto received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ToggleClearWarningAuto fired")

greg.on("greg.SYSTEM.ToggleClearWarningAuto", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ToggleClearWarningAuto", (payload) => {
    console.log("Hook greg.SYSTEM.ToggleClearWarningAuto triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ToggleClearWarningAuto".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ToggleClearWarningAuto", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ToggleClearWarningAuto fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
