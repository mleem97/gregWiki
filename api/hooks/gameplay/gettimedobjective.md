---
title: GetTimedObjective
description: Documentation for greg.GAMEPLAY.GetTimedObjective
path: /api/hooks/gameplay/gettimedobjective
---

# GetTimedObjective

> **Hook ID:** `greg.GAMEPLAY.GetTimedObjective`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.GetTimedObjective

## Native Signature
```csharp
Il2Cpp.Objectives::GetTimedObjective(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetTimedObjective` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.GetTimedObjective", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.GetTimedObjective");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.GetTimedObjective", function(payload)
    greg.log("Hook greg.GAMEPLAY.GetTimedObjective received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.GetTimedObjective fired")

greg.on("greg.GAMEPLAY.GetTimedObjective", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.GetTimedObjective", (payload) => {
    console.log("Hook greg.GAMEPLAY.GetTimedObjective triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.GetTimedObjective".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.GetTimedObjective", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.GetTimedObjective fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
