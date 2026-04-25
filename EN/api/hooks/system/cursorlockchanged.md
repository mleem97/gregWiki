---
title: CursorLockChanged
description: Documentation for greg.SYSTEM.CursorLockChanged
path: /api/hooks/system/cursorlockchanged
---

# CursorLockChanged

> **Hook ID:** `greg.SYSTEM.CursorLockChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/MouseLook.UpdateCursorLock

## Native Signature
```csharp
Il2Cpp.MouseLook::UpdateCursorLock()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CursorLockChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CursorLockChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CursorLockChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CursorLockChanged", function(payload)
    greg.log("Hook greg.SYSTEM.CursorLockChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CursorLockChanged fired")

greg.on("greg.SYSTEM.CursorLockChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CursorLockChanged", (payload) => {
    console.log("Hook greg.SYSTEM.CursorLockChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CursorLockChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CursorLockChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CursorLockChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
