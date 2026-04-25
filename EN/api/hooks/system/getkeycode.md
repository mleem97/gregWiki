---
title: GetKeyCode
description: Documentation for greg.SYSTEM.GetKeyCode
path: /api/hooks/system/getkeycode
---

# GetKeyCode

> **Hook ID:** `greg.SYSTEM.GetKeyCode`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.GetKeyCode

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::GetKeyCode()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetKeyCode` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetKeyCode", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetKeyCode");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetKeyCode", function(payload)
    greg.log("Hook greg.SYSTEM.GetKeyCode received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetKeyCode fired")

greg.on("greg.SYSTEM.GetKeyCode", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetKeyCode", (payload) => {
    console.log("Hook greg.SYSTEM.GetKeyCode triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetKeyCode".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetKeyCode", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetKeyCode fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
