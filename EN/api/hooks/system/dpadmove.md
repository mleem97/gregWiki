---
title: DpadMove
description: Documentation for greg.SYSTEM.DpadMove
path: /api/hooks/system/dpadmove
---

# DpadMove

> **Hook ID:** `greg.SYSTEM.DpadMove`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.DpadMove

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::DpadMove(Vector2)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DpadMove` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DpadMove", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DpadMove");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DpadMove", function(payload)
    greg.log("Hook greg.SYSTEM.DpadMove received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DpadMove fired")

greg.on("greg.SYSTEM.DpadMove", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DpadMove", (payload) => {
    console.log("Hook greg.SYSTEM.DpadMove triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DpadMove".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DpadMove", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DpadMove fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
