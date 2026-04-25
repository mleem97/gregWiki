---
title: DiacriticAdded
description: Documentation for greg.SYSTEM.DiacriticAdded
path: /api/hooks/system/diacriticadded
---

# DiacriticAdded

> **Hook ID:** `greg.SYSTEM.DiacriticAdded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.AddDiacritic

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::AddDiacritic(char, params char[])
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DiacriticAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DiacriticAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DiacriticAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DiacriticAdded", function(payload)
    greg.log("Hook greg.SYSTEM.DiacriticAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DiacriticAdded fired")

greg.on("greg.SYSTEM.DiacriticAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DiacriticAdded", (payload) => {
    console.log("Hook greg.SYSTEM.DiacriticAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DiacriticAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DiacriticAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DiacriticAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
