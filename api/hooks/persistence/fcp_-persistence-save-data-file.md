---
title: FCP_Persistence.SaveDataFile
description: Hook event for FCP_Persistence.SaveDataFile
path: /api/hooks/persistence/fcp_-persistence-save-data-file
---

# FCP_Persistence.SaveDataFile

> **Hook ID:** `greg.persistence.fcp_persistence.savedatafile`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FCP_Persistence.SaveDataFile()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SaveDataFile()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SaveDataFile` events in `FCP_Persistence`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.fcp_persistence.savedatafile", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.fcp_persistence.savedatafile", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.fcp_persistence.savedatafile")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.fcp_persistence.savedatafile", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.fcp_persistence.savedatafile", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.fcp_persistence.savedatafile", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
