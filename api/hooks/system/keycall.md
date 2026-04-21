---
title: KeyCall
description: Documentation for greg.SYSTEM.KeyCall
path: /api/hooks/system/keycall
---

# KeyCall

> **Hook ID:** `greg.SYSTEM.KeyCall`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.KeyCall

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::KeyCall(OSK_KeyCode, OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyCall` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyCall", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyCall");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyCall", function(payload)
    greg.log("Hook greg.SYSTEM.KeyCall received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyCall fired")

greg.on("greg.SYSTEM.KeyCall", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyCall", (payload) => {
    console.log("Hook greg.SYSTEM.KeyCall triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyCall".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyCall", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyCall fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
