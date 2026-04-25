---
title: MainGameManager.AutoSaveCoroutine
description: Hook event for MainGameManager.AutoSaveCoroutine
path: /api/hooks/persistence/main-game-manager-auto-save-coroutine
---

# MainGameManager.AutoSaveCoroutine

> **Hook ID:** `greg.persistence.maingamemanager.autosavecoroutine`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.AutoSaveCoroutine()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator AutoSaveCoroutine()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `AutoSaveCoroutine` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.maingamemanager.autosavecoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.maingamemanager.autosavecoroutine", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.maingamemanager.autosavecoroutine")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.maingamemanager.autosavecoroutine", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.maingamemanager.autosavecoroutine", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.maingamemanager.autosavecoroutine", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
