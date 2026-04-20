---
title: SaveSystem.LoadGame
description: Hook event for SaveSystem.LoadGame
path: /api/hooks/persistence/save-system-load-game
---

# SaveSystem.LoadGame

> **Hook ID:** `greg.persistence.savesystem.loadgame`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SaveSystem.LoadGame()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
SaveData LoadGame(String savename)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `savename` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadGame` events in `SaveSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.savesystem.loadgame", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.savesystem.loadgame", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.savesystem.loadgame")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.savesystem.loadgame", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.savesystem.loadgame", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.savesystem.loadgame", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `SaveData`
- **Safe to block?**: Yes
