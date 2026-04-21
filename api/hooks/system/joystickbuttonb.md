---
title: JoystickButtonB
description: Documentation for greg.SYSTEM.JoystickButtonB
path: /api/hooks/system/joystickbuttonb
---

# JoystickButtonB

> **Hook ID:** `greg.SYSTEM.JoystickButtonB`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_GamepadHelper.JoystickButtonB

## Native Signature
```csharp
Il2Cpp.OSK_GamepadHelper::JoystickButtonB()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `JoystickButtonB` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.JoystickButtonB", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.JoystickButtonB");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.JoystickButtonB", function(payload)
    greg.log("Hook greg.SYSTEM.JoystickButtonB received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.JoystickButtonB fired")

greg.on("greg.SYSTEM.JoystickButtonB", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.JoystickButtonB", (payload) => {
    console.log("Hook greg.SYSTEM.JoystickButtonB triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.JoystickButtonB".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.JoystickButtonB", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.JoystickButtonB fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
