---
title: GetOSKKeyCode
description: Documentation for greg.SYSTEM.GetOSKKeyCode
path: /api/hooks/system/getoskkeycode
---

# GetOSKKeyCode

> **Hook ID:** `greg.SYSTEM.GetOSKKeyCode`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.GetOSKKeyCode

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::GetOSKKeyCode(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetOSKKeyCode` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetOSKKeyCode", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetOSKKeyCode");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetOSKKeyCode", function(payload)
    greg.log("Hook greg.SYSTEM.GetOSKKeyCode received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetOSKKeyCode fired")

greg.on("greg.SYSTEM.GetOSKKeyCode", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetOSKKeyCode", (payload) => {
    console.log("Hook greg.SYSTEM.GetOSKKeyCode triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetOSKKeyCode".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetOSKKeyCode", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetOSKKeyCode fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
