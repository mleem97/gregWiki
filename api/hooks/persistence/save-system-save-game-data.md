---
title: SaveSystem.SaveGameData
description: Hook event for SaveSystem.SaveGameData
path: /api/hooks/persistence/save-system-save-game-data
---

# SaveSystem.SaveGameData

> **Hook ID:** `greg.persistence.savesystem.savegamedata`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SaveSystem.SaveGameData()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SaveGameData()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SaveGameData` events in `SaveSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.savesystem.savegamedata", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.savesystem.savegamedata", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.savesystem.savegamedata")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.savesystem.savegamedata", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.savesystem.savegamedata", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.savesystem.savegamedata", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
