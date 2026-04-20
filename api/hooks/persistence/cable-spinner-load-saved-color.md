---
title: CableSpinner.LoadSavedColor
description: Hook event for CableSpinner.LoadSavedColor
path: /api/hooks/persistence/cable-spinner-load-saved-color
---

# CableSpinner.LoadSavedColor

> **Hook ID:** `greg.persistence.cablespinner.loadsavedcolor`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableSpinner.LoadSavedColor()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadSavedColor()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `LoadSavedColor` events in `CableSpinner`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.cablespinner.loadsavedcolor", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.cablespinner.loadsavedcolor", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.cablespinner.loadsavedcolor")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.cablespinner.loadsavedcolor", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.cablespinner.loadsavedcolor", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.cablespinner.loadsavedcolor", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
