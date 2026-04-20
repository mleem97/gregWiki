---
title: PauseMenu.Save
description: Hook event for PauseMenu.Save
path: /api/hooks/persistence/pause-menu-save
---

# PauseMenu.Save

> **Hook ID:** `greg.persistence.pausemenu.save`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PauseMenu.Save()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Save(String saveName, String _stringNameOfSave)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `saveName` | `String` | ... |
| `_stringNameOfSave` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `Save` events in `PauseMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.pausemenu.save", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.pausemenu.save", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.pausemenu.save")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.pausemenu.save", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.pausemenu.save", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.pausemenu.save", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
