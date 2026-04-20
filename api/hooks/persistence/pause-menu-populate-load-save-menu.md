---
title: PauseMenu.PopulateLoadSaveMenu
description: Hook event for PauseMenu.PopulateLoadSaveMenu
path: /api/hooks/persistence/pause-menu-populate-load-save-menu
---

# PauseMenu.PopulateLoadSaveMenu

> **Hook ID:** `greg.persistence.pausemenu.populateloadsavemenu`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PauseMenu.PopulateLoadSaveMenu()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PopulateLoadSaveMenu(Boolean _savingGame)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_savingGame` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `PopulateLoadSaveMenu` events in `PauseMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.pausemenu.populateloadsavemenu", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.pausemenu.populateloadsavemenu", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.pausemenu.populateloadsavemenu")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.pausemenu.populateloadsavemenu", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.pausemenu.populateloadsavemenu", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.pausemenu.populateloadsavemenu", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
