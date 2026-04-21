---
title: AutoFindKeyboard
description: Documentation for greg.SYSTEM.AutoFindKeyboard
path: /api/hooks/system/autofindkeyboard
---

# AutoFindKeyboard

> **Hook ID:** `greg.SYSTEM.AutoFindKeyboard`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Background.AutoFindKeyboard

## Native Signature
```csharp
Il2Cpp.OSK_Background::AutoFindKeyboard()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoFindKeyboard` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AutoFindKeyboard", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AutoFindKeyboard");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AutoFindKeyboard", function(payload)
    greg.log("Hook greg.SYSTEM.AutoFindKeyboard received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AutoFindKeyboard fired")

greg.on("greg.SYSTEM.AutoFindKeyboard", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AutoFindKeyboard", (payload) => {
    console.log("Hook greg.SYSTEM.AutoFindKeyboard triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AutoFindKeyboard".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AutoFindKeyboard", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AutoFindKeyboard fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
