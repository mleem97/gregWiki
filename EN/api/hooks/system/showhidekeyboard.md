---
title: ShowHideKeyboard
description: Documentation for greg.SYSTEM.ShowHideKeyboard
path: /api/hooks/system/showhidekeyboard
---

# ShowHideKeyboard

> **Hook ID:** `greg.SYSTEM.ShowHideKeyboard`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.ShowHideKeyboard

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::ShowHideKeyboard(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowHideKeyboard` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShowHideKeyboard", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShowHideKeyboard");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShowHideKeyboard", function(payload)
    greg.log("Hook greg.SYSTEM.ShowHideKeyboard received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShowHideKeyboard fired")

greg.on("greg.SYSTEM.ShowHideKeyboard", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShowHideKeyboard", (payload) => {
    console.log("Hook greg.SYSTEM.ShowHideKeyboard triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShowHideKeyboard".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShowHideKeyboard", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShowHideKeyboard fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
