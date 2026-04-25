---
title: AcceptPhysicalKeyboard
description: Documentation for greg.SYSTEM.AcceptPhysicalKeyboard
path: /api/hooks/system/acceptphysicalkeyboard
---

# AcceptPhysicalKeyboard

> **Hook ID:** `greg.SYSTEM.AcceptPhysicalKeyboard`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.AcceptPhysicalKeyboard

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::AcceptPhysicalKeyboard(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AcceptPhysicalKeyboard` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AcceptPhysicalKeyboard", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AcceptPhysicalKeyboard");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AcceptPhysicalKeyboard", function(payload)
    greg.log("Hook greg.SYSTEM.AcceptPhysicalKeyboard received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AcceptPhysicalKeyboard fired")

greg.on("greg.SYSTEM.AcceptPhysicalKeyboard", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AcceptPhysicalKeyboard", (payload) => {
    console.log("Hook greg.SYSTEM.AcceptPhysicalKeyboard triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AcceptPhysicalKeyboard".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AcceptPhysicalKeyboard", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AcceptPhysicalKeyboard fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
