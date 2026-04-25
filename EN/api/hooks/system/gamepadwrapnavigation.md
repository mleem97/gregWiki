---
title: GamepadWrapNavigation
description: Documentation for greg.SYSTEM.GamepadWrapNavigation
path: /api/hooks/system/gamepadwrapnavigation
---

# GamepadWrapNavigation

> **Hook ID:** `greg.SYSTEM.GamepadWrapNavigation`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.GamepadWrapNavigation

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::GamepadWrapNavigation()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GamepadWrapNavigation` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GamepadWrapNavigation", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GamepadWrapNavigation");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GamepadWrapNavigation", function(payload)
    greg.log("Hook greg.SYSTEM.GamepadWrapNavigation received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GamepadWrapNavigation fired")

greg.on("greg.SYSTEM.GamepadWrapNavigation", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GamepadWrapNavigation", (payload) => {
    console.log("Hook greg.SYSTEM.GamepadWrapNavigation triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GamepadWrapNavigation".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GamepadWrapNavigation", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GamepadWrapNavigation fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
