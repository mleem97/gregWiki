---
title: ToggleCharMask
description: Documentation for greg.SYSTEM.ToggleCharMask
path: /api/hooks/system/togglecharmask
---

# ToggleCharMask

> **Hook ID:** `greg.SYSTEM.ToggleCharMask`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.ToggleCharMask

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::ToggleCharMask(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ToggleCharMask` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ToggleCharMask", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ToggleCharMask");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ToggleCharMask", function(payload)
    greg.log("Hook greg.SYSTEM.ToggleCharMask received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ToggleCharMask fired")

greg.on("greg.SYSTEM.ToggleCharMask", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ToggleCharMask", (payload) => {
    console.log("Hook greg.SYSTEM.ToggleCharMask triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ToggleCharMask".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ToggleCharMask", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ToggleCharMask fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
