---
title: GetPlayerInput
description: Documentation for greg.SYSTEM.GetPlayerInput
path: /api/hooks/system/getplayerinput
---

# GetPlayerInput

> **Hook ID:** `greg.SYSTEM.GetPlayerInput`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/CameraController.GetPlayerInput

## Native Signature
```csharp
Il2Cpp.CameraController::GetPlayerInput()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetPlayerInput` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetPlayerInput", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetPlayerInput");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetPlayerInput", function(payload)
    greg.log("Hook greg.SYSTEM.GetPlayerInput received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetPlayerInput fired")

greg.on("greg.SYSTEM.GetPlayerInput", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetPlayerInput", (payload) => {
    console.log("Hook greg.SYSTEM.GetPlayerInput triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetPlayerInput".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetPlayerInput", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetPlayerInput fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
