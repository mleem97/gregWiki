---
title: Il2CppSystem
description: Documentation for greg.SYSTEM.Il2CppSystem.Object
path: /api/hooks/system/il2cppsystem
---

# Il2CppSystem

> **Hook ID:** `greg.SYSTEM.Il2CppSystem.Object`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.Il2CppSystem.Object

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::Il2CppSystem.Object()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Il2CppSystem` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Il2CppSystem.Object", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Il2CppSystem.Object");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Il2CppSystem.Object", function(payload)
    greg.log("Hook greg.SYSTEM.Il2CppSystem.Object received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Il2CppSystem.Object fired")

greg.on("greg.SYSTEM.Il2CppSystem.Object", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Il2CppSystem.Object", (payload) => {
    console.log("Hook greg.SYSTEM.Il2CppSystem.Object triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Il2CppSystem.Object".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Il2CppSystem.Object", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Il2CppSystem.Object fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
