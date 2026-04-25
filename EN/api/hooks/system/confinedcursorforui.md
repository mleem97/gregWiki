---
title: ConfinedCursorforUI
description: Documentation for greg.SYSTEM.ConfinedCursorforUI
path: /api/hooks/system/confinedcursorforui
---

# ConfinedCursorforUI

> **Hook ID:** `greg.SYSTEM.ConfinedCursorforUI`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.ConfinedCursorforUI

## Native Signature
```csharp
Il2Cpp.InputManager::ConfinedCursorforUI()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ConfinedCursorforUI` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ConfinedCursorforUI", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ConfinedCursorforUI");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ConfinedCursorforUI", function(payload)
    greg.log("Hook greg.SYSTEM.ConfinedCursorforUI received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ConfinedCursorforUI fired")

greg.on("greg.SYSTEM.ConfinedCursorforUI", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ConfinedCursorforUI", (payload) => {
    console.log("Hook greg.SYSTEM.ConfinedCursorforUI triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ConfinedCursorforUI".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ConfinedCursorforUI", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ConfinedCursorforUI fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
