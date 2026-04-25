---
title: EffectOnDestroy
description: Documentation for greg.GAMEPLAY.EffectOnDestroy
path: /api/hooks/gameplay/effectondestroy
---

# EffectOnDestroy

> **Hook ID:** `greg.GAMEPLAY.EffectOnDestroy`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.EffectOnDestroy

## Native Signature
```csharp
Il2Cpp.Objectives::EffectOnDestroy(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `EffectOnDestroy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.EffectOnDestroy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.EffectOnDestroy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.EffectOnDestroy", function(payload)
    greg.log("Hook greg.GAMEPLAY.EffectOnDestroy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.EffectOnDestroy fired")

greg.on("greg.GAMEPLAY.EffectOnDestroy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.EffectOnDestroy", (payload) => {
    console.log("Hook greg.GAMEPLAY.EffectOnDestroy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.EffectOnDestroy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.EffectOnDestroy", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.EffectOnDestroy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
