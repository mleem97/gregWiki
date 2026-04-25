---
title: GamepadInput_Horizontal
description: Documentation for greg.SYSTEM.GamepadInput_Horizontal
path: /api/hooks/system/gamepadinput-horizontal
---

# GamepadInput_Horizontal

> **Hook ID:** `greg.SYSTEM.GamepadInput_Horizontal`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.GamepadInput_Horizontal

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::GamepadInput_Horizontal(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GamepadInput_Horizontal` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GamepadInput_Horizontal", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GamepadInput_Horizontal");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GamepadInput_Horizontal", function(payload)
    greg.log("Hook greg.SYSTEM.GamepadInput_Horizontal received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GamepadInput_Horizontal fired")

greg.on("greg.SYSTEM.GamepadInput_Horizontal", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GamepadInput_Horizontal", (payload) => {
    console.log("Hook greg.SYSTEM.GamepadInput_Horizontal triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GamepadInput_Horizontal".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GamepadInput_Horizontal", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GamepadInput_Horizontal fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
