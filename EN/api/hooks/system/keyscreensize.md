---
title: KeyScreenSize
description: Documentation for greg.SYSTEM.KeyScreenSize
path: /api/hooks/system/keyscreensize
---

# KeyScreenSize

> **Hook ID:** `greg.SYSTEM.KeyScreenSize`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.KeyScreenSize

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::KeyScreenSize()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyScreenSize` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyScreenSize", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyScreenSize");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyScreenSize", function(payload)
    greg.log("Hook greg.SYSTEM.KeyScreenSize received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyScreenSize fired")

greg.on("greg.SYSTEM.KeyScreenSize", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyScreenSize", (payload) => {
    console.log("Hook greg.SYSTEM.KeyScreenSize triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyScreenSize".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyScreenSize", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyScreenSize fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
