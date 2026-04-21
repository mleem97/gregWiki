---
title: KeyShift
description: Documentation for greg.SYSTEM.KeyShift
path: /api/hooks/system/keyshift
---

# KeyShift

> **Hook ID:** `greg.SYSTEM.KeyShift`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.KeyShift

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::KeyShift()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyShift` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyShift", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyShift");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyShift", function(payload)
    greg.log("Hook greg.SYSTEM.KeyShift received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyShift fired")

greg.on("greg.SYSTEM.KeyShift", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyShift", (payload) => {
    console.log("Hook greg.SYSTEM.KeyShift triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyShift".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyShift", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyShift fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
