---
title: MainGameManager.SetAutoSaveEnabled
description: Hook event for MainGameManager.SetAutoSaveEnabled
path: /api/hooks/persistence/main-game-manager-set-auto-save-enabled
---

# MainGameManager.SetAutoSaveEnabled

> **Hook ID:** `greg.persistence.maingamemanager.setautosaveenabled`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.SetAutoSaveEnabled()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetAutoSaveEnabled(Boolean enabled)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `enabled` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetAutoSaveEnabled` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.maingamemanager.setautosaveenabled", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.maingamemanager.setautosaveenabled", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.maingamemanager.setautosaveenabled")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.maingamemanager.setautosaveenabled", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.maingamemanager.setautosaveenabled", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.maingamemanager.setautosaveenabled", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
