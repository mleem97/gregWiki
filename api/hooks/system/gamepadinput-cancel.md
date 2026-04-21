---
title: GamepadInput_Cancel
description: Documentation for greg.SYSTEM.GamepadInput_Cancel
path: /api/hooks/system/gamepadinput-cancel
---

# GamepadInput_Cancel

> **Hook ID:** `greg.SYSTEM.GamepadInput_Cancel`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.GamepadInput_Cancel

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::GamepadInput_Cancel()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GamepadInput_Cancel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GamepadInput_Cancel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GamepadInput_Cancel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GamepadInput_Cancel", function(payload)
    greg.log("Hook greg.SYSTEM.GamepadInput_Cancel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GamepadInput_Cancel fired")

greg.on("greg.SYSTEM.GamepadInput_Cancel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GamepadInput_Cancel", (payload) => {
    console.log("Hook greg.SYSTEM.GamepadInput_Cancel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GamepadInput_Cancel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GamepadInput_Cancel", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GamepadInput_Cancel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
