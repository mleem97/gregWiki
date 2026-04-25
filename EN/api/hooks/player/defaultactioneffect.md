---
title: DefaultActionEffect
description: Documentation for greg.PLAYER.DefaultActionEffect
path: /api/hooks/player/defaultactioneffect
---

# DefaultActionEffect

> **Hook ID:** `greg.PLAYER.DefaultActionEffect`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerManager.DefaultActionEffect

## Native Signature
```csharp
Il2Cpp.PlayerManager::DefaultActionEffect(Vector3, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DefaultActionEffect` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.DefaultActionEffect", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.DefaultActionEffect");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.DefaultActionEffect", function(payload)
    greg.log("Hook greg.PLAYER.DefaultActionEffect received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.DefaultActionEffect fired")

greg.on("greg.PLAYER.DefaultActionEffect", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.DefaultActionEffect", (payload) => {
    console.log("Hook greg.PLAYER.DefaultActionEffect triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.DefaultActionEffect".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.DefaultActionEffect", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.DefaultActionEffect fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
