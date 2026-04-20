---
title: LoadingScreen.LoadGameLoadScene
description: Hook event for LoadingScreen.LoadGameLoadScene
path: /api/hooks/persistence/loading-screen-load-game-load-scene
---

# LoadingScreen.LoadGameLoadScene

> **Hook ID:** `greg.persistence.loadingscreen.loadgameloadscene`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LoadingScreen.LoadGameLoadScene()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator LoadGameLoadScene(Il2CppStructArray`1 loadedScenes)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `loadedScenes` | `Il2CppStructArray`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadGameLoadScene` events in `LoadingScreen`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.loadingscreen.loadgameloadscene", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.loadingscreen.loadgameloadscene", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.loadingscreen.loadgameloadscene")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.loadingscreen.loadgameloadscene", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.loadingscreen.loadgameloadscene", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.loadingscreen.loadgameloadscene", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
