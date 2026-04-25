---
title: ObjectiveSignRemoved
description: Documentation for greg.GAMEPLAY.ObjectiveSignRemoved
path: /api/hooks/gameplay/objectivesignremoved
---

# ObjectiveSignRemoved

> **Hook ID:** `greg.GAMEPLAY.ObjectiveSignRemoved`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.RemoveObjectiveSign

## Native Signature
```csharp
Il2Cpp.Objectives::RemoveObjectiveSign(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ObjectiveSignRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.ObjectiveSignRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.ObjectiveSignRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.ObjectiveSignRemoved", function(payload)
    greg.log("Hook greg.GAMEPLAY.ObjectiveSignRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.ObjectiveSignRemoved fired")

greg.on("greg.GAMEPLAY.ObjectiveSignRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.ObjectiveSignRemoved", (payload) => {
    console.log("Hook greg.GAMEPLAY.ObjectiveSignRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.ObjectiveSignRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.ObjectiveSignRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.ObjectiveSignRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
