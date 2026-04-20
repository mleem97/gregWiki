---
title: LoadingScreen.LoadGameScenesVoid
description: Hook event for LoadingScreen.LoadGameScenesVoid
path: /api/hooks/persistence/loading-screen-load-game-scenes-void
---

# LoadingScreen.LoadGameScenesVoid

> **Hook ID:** `greg.persistence.loadingscreen.loadgamescenesvoid`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LoadingScreen.LoadGameScenesVoid()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadGameScenesVoid(PlayerData playerData, List`1 technicianData, Il2CppStructArray`1 loadedScenes, Il2CppStructArray`1 hiredTechnicians, List`1 repairJobQueue)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `playerData` | `PlayerData` | ... |
| `technicianData` | `List`1` | ... |
| `loadedScenes` | `Il2CppStructArray`1` | ... |
| `hiredTechnicians` | `Il2CppStructArray`1` | ... |
| `repairJobQueue` | `List`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadGameScenesVoid` events in `LoadingScreen`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.loadingscreen.loadgamescenesvoid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.loadingscreen.loadgamescenesvoid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.loadingscreen.loadgamescenesvoid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.loadingscreen.loadgamescenesvoid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.loadingscreen.loadgamescenesvoid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.loadingscreen.loadgamescenesvoid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
