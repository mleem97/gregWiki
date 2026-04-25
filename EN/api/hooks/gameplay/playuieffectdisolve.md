---
title: PlayUIEffectDisolve
description: Documentation for greg.GAMEPLAY.PlayUIEffectDisolve
path: /api/hooks/gameplay/playuieffectdisolve
---

# PlayUIEffectDisolve

> **Hook ID:** `greg.GAMEPLAY.PlayUIEffectDisolve`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ObjectiveObject.PlayUIEffectDisolve

## Native Signature
```csharp
Il2Cpp.ObjectiveObject::PlayUIEffectDisolve()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlayUIEffectDisolve` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.PlayUIEffectDisolve", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.PlayUIEffectDisolve");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.PlayUIEffectDisolve", function(payload)
    greg.log("Hook greg.GAMEPLAY.PlayUIEffectDisolve received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.PlayUIEffectDisolve fired")

greg.on("greg.GAMEPLAY.PlayUIEffectDisolve", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.PlayUIEffectDisolve", (payload) => {
    console.log("Hook greg.GAMEPLAY.PlayUIEffectDisolve triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.PlayUIEffectDisolve".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.PlayUIEffectDisolve", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.PlayUIEffectDisolve fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
