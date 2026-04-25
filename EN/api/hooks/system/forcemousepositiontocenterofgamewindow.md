---
title: ForceMousePositionToCenterOfGameWindow
description: Documentation for greg.SYSTEM.ForceMousePositionToCenterOfGameWindow
path: /api/hooks/system/forcemousepositiontocenterofgamewindow
---

# ForceMousePositionToCenterOfGameWindow

> **Hook ID:** `greg.SYSTEM.ForceMousePositionToCenterOfGameWindow`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.ForceMousePositionToCenterOfGameWindow

## Native Signature
```csharp
Il2Cpp.InputManager::ForceMousePositionToCenterOfGameWindow()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ForceMousePositionToCenterOfGameWindow` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ForceMousePositionToCenterOfGameWindow", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ForceMousePositionToCenterOfGameWindow");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ForceMousePositionToCenterOfGameWindow", function(payload)
    greg.log("Hook greg.SYSTEM.ForceMousePositionToCenterOfGameWindow received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ForceMousePositionToCenterOfGameWindow fired")

greg.on("greg.SYSTEM.ForceMousePositionToCenterOfGameWindow", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ForceMousePositionToCenterOfGameWindow", (payload) => {
    console.log("Hook greg.SYSTEM.ForceMousePositionToCenterOfGameWindow triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ForceMousePositionToCenterOfGameWindow".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ForceMousePositionToCenterOfGameWindow", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ForceMousePositionToCenterOfGameWindow fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
