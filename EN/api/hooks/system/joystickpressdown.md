---
title: JoystickPressDown
description: Documentation for greg.SYSTEM.JoystickPressDown
path: /api/hooks/system/joystickpressdown
---

# JoystickPressDown

> **Hook ID:** `greg.SYSTEM.JoystickPressDown`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.JoystickPressDown

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::JoystickPressDown(OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `JoystickPressDown` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.JoystickPressDown", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.JoystickPressDown");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.JoystickPressDown", function(payload)
    greg.log("Hook greg.SYSTEM.JoystickPressDown received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.JoystickPressDown fired")

greg.on("greg.SYSTEM.JoystickPressDown", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.JoystickPressDown", (payload) => {
    console.log("Hook greg.SYSTEM.JoystickPressDown triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.JoystickPressDown".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.JoystickPressDown", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.JoystickPressDown fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
