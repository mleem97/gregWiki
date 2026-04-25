---
title: OSK_to_KeyCode
description: Documentation for greg.SYSTEM.OSK_to_KeyCode
path: /api/hooks/system/osk-to-keycode
---

# OSK_to_KeyCode

> **Hook ID:** `greg.SYSTEM.OSK_to_KeyCode`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.OSK_to_KeyCode

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::OSK_to_KeyCode(OSK_KeyCode)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OSK_to_KeyCode` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OSK_to_KeyCode", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OSK_to_KeyCode");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OSK_to_KeyCode", function(payload)
    greg.log("Hook greg.SYSTEM.OSK_to_KeyCode received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OSK_to_KeyCode fired")

greg.on("greg.SYSTEM.OSK_to_KeyCode", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OSK_to_KeyCode", (payload) => {
    console.log("Hook greg.SYSTEM.OSK_to_KeyCode triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OSK_to_KeyCode".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OSK_to_KeyCode", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OSK_to_KeyCode fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
