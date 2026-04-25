---
title: GainIOPSEffect
description: Documentation for greg.PLAYER.GainIOPSEffect
path: /api/hooks/player/gainiopseffect
---

# GainIOPSEffect

> **Hook ID:** `greg.PLAYER.GainIOPSEffect`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerManager.GainIOPSEffect

## Native Signature
```csharp
Il2Cpp.PlayerManager::GainIOPSEffect()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GainIOPSEffect` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.GainIOPSEffect", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.GainIOPSEffect");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.GainIOPSEffect", function(payload)
    greg.log("Hook greg.PLAYER.GainIOPSEffect received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.GainIOPSEffect fired")

greg.on("greg.PLAYER.GainIOPSEffect", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.GainIOPSEffect", (payload) => {
    console.log("Hook greg.PLAYER.GainIOPSEffect triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.GainIOPSEffect".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.GainIOPSEffect", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.GainIOPSEffect fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
