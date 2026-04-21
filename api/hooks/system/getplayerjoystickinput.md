---
title: GetPlayerJoystickInput
description: Documentation for greg.SYSTEM.GetPlayerJoystickInput
path: /api/hooks/system/getplayerjoystickinput
---

# GetPlayerJoystickInput

> **Hook ID:** `greg.SYSTEM.GetPlayerJoystickInput`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.GetPlayerJoystickInput

## Native Signature
```csharp
Il2Cpp.viperInput::GetPlayerJoystickInput(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetPlayerJoystickInput` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetPlayerJoystickInput", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetPlayerJoystickInput");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetPlayerJoystickInput", function(payload)
    greg.log("Hook greg.SYSTEM.GetPlayerJoystickInput received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetPlayerJoystickInput fired")

greg.on("greg.SYSTEM.GetPlayerJoystickInput", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetPlayerJoystickInput", (payload) => {
    console.log("Hook greg.SYSTEM.GetPlayerJoystickInput triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetPlayerJoystickInput".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetPlayerJoystickInput", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetPlayerJoystickInput fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
