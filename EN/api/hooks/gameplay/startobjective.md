---
title: StartObjective
description: Documentation for greg.GAMEPLAY.StartObjective
path: /api/hooks/gameplay/startobjective
---

# StartObjective

> **Hook ID:** `greg.GAMEPLAY.StartObjective`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.StartObjective

## Native Signature
```csharp
Il2Cpp.Objectives::StartObjective(int, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StartObjective` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.StartObjective", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.StartObjective");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.StartObjective", function(payload)
    greg.log("Hook greg.GAMEPLAY.StartObjective received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.StartObjective fired")

greg.on("greg.GAMEPLAY.StartObjective", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.StartObjective", (payload) => {
    console.log("Hook greg.GAMEPLAY.StartObjective triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.StartObjective".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.StartObjective", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.StartObjective fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
