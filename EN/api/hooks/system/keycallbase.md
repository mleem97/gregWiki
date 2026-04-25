---
title: KeyCallBase
description: Documentation for greg.SYSTEM.KeyCallBase
path: /api/hooks/system/keycallbase
---

# KeyCallBase

> **Hook ID:** `greg.SYSTEM.KeyCallBase`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.KeyCallBase

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::KeyCallBase(OSK_KeyCode, OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyCallBase` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyCallBase", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyCallBase");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyCallBase", function(payload)
    greg.log("Hook greg.SYSTEM.KeyCallBase received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyCallBase fired")

greg.on("greg.SYSTEM.KeyCallBase", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyCallBase", (payload) => {
    console.log("Hook greg.SYSTEM.KeyCallBase triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyCallBase".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyCallBase", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyCallBase fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
