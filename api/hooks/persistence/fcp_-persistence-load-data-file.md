---
title: FCP_Persistence.LoadDataFile
description: Hook event for FCP_Persistence.LoadDataFile
path: /api/hooks/persistence/fcp_-persistence-load-data-file
---

# FCP_Persistence.LoadDataFile

> **Hook ID:** `greg.persistence.fcp_persistence.loaddatafile`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FCP_Persistence.LoadDataFile()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadDataFile()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `LoadDataFile` events in `FCP_Persistence`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.fcp_persistence.loaddatafile", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.fcp_persistence.loaddatafile", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.fcp_persistence.loaddatafile")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.fcp_persistence.loaddatafile", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.fcp_persistence.loaddatafile", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.fcp_persistence.loaddatafile", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
