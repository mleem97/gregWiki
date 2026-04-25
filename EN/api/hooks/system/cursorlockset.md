---
title: CursorLockSet
description: Documentation for greg.SYSTEM.CursorLockSet
path: /api/hooks/system/cursorlockset
---

# CursorLockSet

> **Hook ID:** `greg.SYSTEM.CursorLockSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/MouseLook.SetCursorLock

## Native Signature
```csharp
Il2Cpp.MouseLook::SetCursorLock(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CursorLockSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CursorLockSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CursorLockSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CursorLockSet", function(payload)
    greg.log("Hook greg.SYSTEM.CursorLockSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CursorLockSet fired")

greg.on("greg.SYSTEM.CursorLockSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CursorLockSet", (payload) => {
    console.log("Hook greg.SYSTEM.CursorLockSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CursorLockSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CursorLockSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CursorLockSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
