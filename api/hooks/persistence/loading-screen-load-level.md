---
title: LoadingScreen.LoadLevel
description: Hook event for LoadingScreen.LoadLevel
path: /api/hooks/persistence/loading-screen-load-level
---

# LoadingScreen.LoadLevel

> **Hook ID:** `greg.persistence.loadingscreen.loadlevel`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LoadingScreen.LoadLevel()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadLevel(Int32 sceneIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `sceneIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadLevel` events in `LoadingScreen`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.loadingscreen.loadlevel", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.loadingscreen.loadlevel", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.loadingscreen.loadlevel")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.loadingscreen.loadlevel", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.loadingscreen.loadlevel", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.loadingscreen.loadlevel", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
