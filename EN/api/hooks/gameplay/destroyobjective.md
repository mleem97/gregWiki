---
title: DestroyObjective
description: Documentation for greg.GAMEPLAY.DestroyObjective
path: /api/hooks/gameplay/destroyobjective
---

# DestroyObjective

> **Hook ID:** `greg.GAMEPLAY.DestroyObjective`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.DestroyObjective

## Native Signature
```csharp
Il2Cpp.Objectives::DestroyObjective(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DestroyObjective` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.DestroyObjective", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.DestroyObjective");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.DestroyObjective", function(payload)
    greg.log("Hook greg.GAMEPLAY.DestroyObjective received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.DestroyObjective fired")

greg.on("greg.GAMEPLAY.DestroyObjective", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.DestroyObjective", (payload) => {
    console.log("Hook greg.GAMEPLAY.DestroyObjective triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.DestroyObjective".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.DestroyObjective", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.DestroyObjective fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
