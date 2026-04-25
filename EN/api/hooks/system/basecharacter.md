---
title: BaseCharacter
description: Documentation for greg.SYSTEM.BaseCharacter
path: /api/hooks/system/basecharacter
---

# BaseCharacter

> **Hook ID:** `greg.SYSTEM.BaseCharacter`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.BaseCharacter

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::BaseCharacter(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BaseCharacter` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BaseCharacter", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BaseCharacter");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BaseCharacter", function(payload)
    greg.log("Hook greg.SYSTEM.BaseCharacter received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BaseCharacter fired")

greg.on("greg.SYSTEM.BaseCharacter", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BaseCharacter", (payload) => {
    console.log("Hook greg.SYSTEM.BaseCharacter triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BaseCharacter".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BaseCharacter", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BaseCharacter fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
