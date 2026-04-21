---
title: PauseMenu
description: Documentation for greg.SYSTEM.PauseMenu.OnPauseMenuClose
path: /api/hooks/system/pausemenu
---

# PauseMenu

> **Hook ID:** `greg.SYSTEM.PauseMenu.OnPauseMenuClose`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/OnPauseMenuClose.PauseMenu.OnPauseMenuClose

## Native Signature
```csharp
Il2Cpp.OnPauseMenuClose::PauseMenu.OnPauseMenuClose([In] System.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PauseMenu` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PauseMenu.OnPauseMenuClose", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PauseMenu.OnPauseMenuClose");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PauseMenu.OnPauseMenuClose", function(payload)
    greg.log("Hook greg.SYSTEM.PauseMenu.OnPauseMenuClose received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PauseMenu.OnPauseMenuClose fired")

greg.on("greg.SYSTEM.PauseMenu.OnPauseMenuClose", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PauseMenu.OnPauseMenuClose", (payload) => {
    console.log("Hook greg.SYSTEM.PauseMenu.OnPauseMenuClose triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PauseMenu.OnPauseMenuClose".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PauseMenu.OnPauseMenuClose", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PauseMenu.OnPauseMenuClose fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
