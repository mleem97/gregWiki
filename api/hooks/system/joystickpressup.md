---
title: JoystickPressUp
description: Documentation for greg.SYSTEM.JoystickPressUp
path: /api/hooks/system/joystickpressup
---

# JoystickPressUp

> **Hook ID:** `greg.SYSTEM.JoystickPressUp`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.JoystickPressUp

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::JoystickPressUp(OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `JoystickPressUp` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.JoystickPressUp", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.JoystickPressUp");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.JoystickPressUp", function(payload)
    greg.log("Hook greg.SYSTEM.JoystickPressUp received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.JoystickPressUp fired")

greg.on("greg.SYSTEM.JoystickPressUp", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.JoystickPressUp", (payload) => {
    console.log("Hook greg.SYSTEM.JoystickPressUp triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.JoystickPressUp".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.JoystickPressUp", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.JoystickPressUp fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
