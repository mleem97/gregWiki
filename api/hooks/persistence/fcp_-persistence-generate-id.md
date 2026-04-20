---
title: FCP_Persistence.GenerateID
description: Hook event for FCP_Persistence.GenerateID
path: /api/hooks/persistence/fcp_-persistence-generate-id
---

# FCP_Persistence.GenerateID

> **Hook ID:** `greg.persistence.fcp_persistence.generateid`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FCP_Persistence.GenerateID()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GenerateID()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GenerateID` events in `FCP_Persistence`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.fcp_persistence.generateid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.fcp_persistence.generateid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.fcp_persistence.generateid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.fcp_persistence.generateid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.fcp_persistence.generateid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.fcp_persistence.generateid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
