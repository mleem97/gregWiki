---
title: RemapPhysicalKeyboard
description: Documentation for greg.SYSTEM.RemapPhysicalKeyboard
path: /api/hooks/system/remapphysicalkeyboard
---

# RemapPhysicalKeyboard

> **Hook ID:** `greg.SYSTEM.RemapPhysicalKeyboard`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.RemapPhysicalKeyboard

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::RemapPhysicalKeyboard()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RemapPhysicalKeyboard` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RemapPhysicalKeyboard", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RemapPhysicalKeyboard");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RemapPhysicalKeyboard", function(payload)
    greg.log("Hook greg.SYSTEM.RemapPhysicalKeyboard received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RemapPhysicalKeyboard fired")

greg.on("greg.SYSTEM.RemapPhysicalKeyboard", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RemapPhysicalKeyboard", (payload) => {
    console.log("Hook greg.SYSTEM.RemapPhysicalKeyboard triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RemapPhysicalKeyboard".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RemapPhysicalKeyboard", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RemapPhysicalKeyboard fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
