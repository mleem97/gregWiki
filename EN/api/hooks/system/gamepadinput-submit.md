---
title: GamepadInput_Submit
description: Documentation for greg.SYSTEM.GamepadInput_Submit
path: /api/hooks/system/gamepadinput-submit
---

# GamepadInput_Submit

> **Hook ID:** `greg.SYSTEM.GamepadInput_Submit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.GamepadInput_Submit

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::GamepadInput_Submit()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GamepadInput_Submit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GamepadInput_Submit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GamepadInput_Submit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GamepadInput_Submit", function(payload)
    greg.log("Hook greg.SYSTEM.GamepadInput_Submit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GamepadInput_Submit fired")

greg.on("greg.SYSTEM.GamepadInput_Submit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GamepadInput_Submit", (payload) => {
    console.log("Hook greg.SYSTEM.GamepadInput_Submit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GamepadInput_Submit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GamepadInput_Submit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GamepadInput_Submit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
