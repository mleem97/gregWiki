---
title: GamepadPrep
description: Documentation for greg.SYSTEM.GamepadPrep
path: /api/hooks/system/gamepadprep
---

# GamepadPrep

> **Hook ID:** `greg.SYSTEM.GamepadPrep`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_GamepadHelper.GamepadPrep

## Native Signature
```csharp
Il2Cpp.OSK_GamepadHelper::GamepadPrep()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GamepadPrep` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GamepadPrep", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GamepadPrep");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GamepadPrep", function(payload)
    greg.log("Hook greg.SYSTEM.GamepadPrep received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GamepadPrep fired")

greg.on("greg.SYSTEM.GamepadPrep", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GamepadPrep", (payload) => {
    console.log("Hook greg.SYSTEM.GamepadPrep triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GamepadPrep".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GamepadPrep", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GamepadPrep fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
