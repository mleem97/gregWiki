---
title: GamepadInput_Vertical
description: Documentation for greg.SYSTEM.GamepadInput_Vertical
path: /api/hooks/system/gamepadinput-vertical
---

# GamepadInput_Vertical

> **Hook ID:** `greg.SYSTEM.GamepadInput_Vertical`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.GamepadInput_Vertical

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::GamepadInput_Vertical(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GamepadInput_Vertical` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GamepadInput_Vertical", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GamepadInput_Vertical");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GamepadInput_Vertical", function(payload)
    greg.log("Hook greg.SYSTEM.GamepadInput_Vertical received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GamepadInput_Vertical fired")

greg.on("greg.SYSTEM.GamepadInput_Vertical", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GamepadInput_Vertical", (payload) => {
    console.log("Hook greg.SYSTEM.GamepadInput_Vertical triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GamepadInput_Vertical".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GamepadInput_Vertical", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GamepadInput_Vertical fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
