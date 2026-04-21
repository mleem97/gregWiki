---
title: CreateAppObjective
description: Documentation for greg.GAMEPLAY.CreateAppObjective
path: /api/hooks/gameplay/createappobjective
---

# CreateAppObjective

> **Hook ID:** `greg.GAMEPLAY.CreateAppObjective`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.CreateAppObjective

## Native Signature
```csharp
Il2Cpp.Objectives::CreateAppObjective(int, int, int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateAppObjective` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.CreateAppObjective", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.CreateAppObjective");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.CreateAppObjective", function(payload)
    greg.log("Hook greg.GAMEPLAY.CreateAppObjective received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.CreateAppObjective fired")

greg.on("greg.GAMEPLAY.CreateAppObjective", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.CreateAppObjective", (payload) => {
    console.log("Hook greg.GAMEPLAY.CreateAppObjective triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.CreateAppObjective".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.CreateAppObjective", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.CreateAppObjective fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
