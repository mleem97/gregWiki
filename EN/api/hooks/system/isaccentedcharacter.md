---
title: IsAccentedCharacter
description: Documentation for greg.SYSTEM.IsAccentedCharacter
path: /api/hooks/system/isaccentedcharacter
---

# IsAccentedCharacter

> **Hook ID:** `greg.SYSTEM.IsAccentedCharacter`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.IsAccentedCharacter

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::IsAccentedCharacter(char)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsAccentedCharacter` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsAccentedCharacter", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsAccentedCharacter");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsAccentedCharacter", function(payload)
    greg.log("Hook greg.SYSTEM.IsAccentedCharacter received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsAccentedCharacter fired")

greg.on("greg.SYSTEM.IsAccentedCharacter", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsAccentedCharacter", (payload) => {
    console.log("Hook greg.SYSTEM.IsAccentedCharacter triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsAccentedCharacter".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsAccentedCharacter", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsAccentedCharacter fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
