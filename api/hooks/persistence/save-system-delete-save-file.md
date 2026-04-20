---
title: SaveSystem.DeleteSaveFile
description: Hook event for SaveSystem.DeleteSaveFile
path: /api/hooks/persistence/save-system-delete-save-file
---

# SaveSystem.DeleteSaveFile

> **Hook ID:** `greg.persistence.savesystem.deletesavefile`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SaveSystem.DeleteSaveFile()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void DeleteSaveFile(String savename)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `savename` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `DeleteSaveFile` events in `SaveSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.savesystem.deletesavefile", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.savesystem.deletesavefile", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.savesystem.deletesavefile")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.savesystem.deletesavefile", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.savesystem.deletesavefile", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.savesystem.deletesavefile", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
