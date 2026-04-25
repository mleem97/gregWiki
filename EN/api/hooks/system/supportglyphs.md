---
title: SupportGlyphs
description: Documentation for greg.SYSTEM.SupportGlyphs
path: /api/hooks/system/supportglyphs
---

# SupportGlyphs

> **Hook ID:** `greg.SYSTEM.SupportGlyphs`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.SupportGlyphs

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::SupportGlyphs(OSK_LanguagePackage)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SupportGlyphs` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SupportGlyphs", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SupportGlyphs");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SupportGlyphs", function(payload)
    greg.log("Hook greg.SYSTEM.SupportGlyphs received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SupportGlyphs fired")

greg.on("greg.SYSTEM.SupportGlyphs", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SupportGlyphs", (payload) => {
    console.log("Hook greg.SYSTEM.SupportGlyphs triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SupportGlyphs".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SupportGlyphs", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SupportGlyphs fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
