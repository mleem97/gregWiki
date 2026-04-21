---
title: ObjectivesLoaded
description: Documentation for greg.GAMEPLAY.ObjectivesLoaded
path: /api/hooks/gameplay/objectivesloaded
---

# ObjectivesLoaded

> **Hook ID:** `greg.GAMEPLAY.ObjectivesLoaded`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.LoadObjectives

## Native Signature
```csharp
Il2Cpp.Objectives::LoadObjectives(HashSet<int>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ObjectivesLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.ObjectivesLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.ObjectivesLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.ObjectivesLoaded", function(payload)
    greg.log("Hook greg.GAMEPLAY.ObjectivesLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.ObjectivesLoaded fired")

greg.on("greg.GAMEPLAY.ObjectivesLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.ObjectivesLoaded", (payload) => {
    console.log("Hook greg.GAMEPLAY.ObjectivesLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.ObjectivesLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.ObjectivesLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.ObjectivesLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
