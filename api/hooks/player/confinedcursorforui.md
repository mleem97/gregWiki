---
title: ConfinedCursorforUI
description: Documentation for greg.PLAYER.ConfinedCursorforUI
path: /api/hooks/player/confinedcursorforui
---

# ConfinedCursorforUI

> **Hook ID:** `greg.PLAYER.ConfinedCursorforUI`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerManager.ConfinedCursorforUI

## Native Signature
```csharp
Il2Cpp.PlayerManager::ConfinedCursorforUI()
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
        GregAPI.Hooks.On("greg.PLAYER.ConfinedCursorforUI", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.ConfinedCursorforUI");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.ConfinedCursorforUI", function(payload)
    greg.log("Hook greg.PLAYER.ConfinedCursorforUI received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.ConfinedCursorforUI fired")

greg.on("greg.PLAYER.ConfinedCursorforUI", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.ConfinedCursorforUI", (payload) => {
    console.log("Hook greg.PLAYER.ConfinedCursorforUI triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.ConfinedCursorforUI".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.ConfinedCursorforUI", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.ConfinedCursorforUI fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
