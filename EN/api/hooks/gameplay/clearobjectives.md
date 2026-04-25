---
title: ClearObjectives
description: Documentation for greg.GAMEPLAY.ClearObjectives
path: /api/hooks/gameplay/clearobjectives
---

# ClearObjectives

> **Hook ID:** `greg.GAMEPLAY.ClearObjectives`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.ClearObjectives

## Native Signature
```csharp
Il2Cpp.Objectives::ClearObjectives()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearObjectives` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.ClearObjectives", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.ClearObjectives");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.ClearObjectives", function(payload)
    greg.log("Hook greg.GAMEPLAY.ClearObjectives received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.ClearObjectives fired")

greg.on("greg.GAMEPLAY.ClearObjectives", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.ClearObjectives", (payload) => {
    console.log("Hook greg.GAMEPLAY.ClearObjectives triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.ClearObjectives".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.ClearObjectives", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.ClearObjectives fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
