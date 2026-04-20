---
title: CableSpinner.DropObject
description: Hook event for CableSpinner.DropObject
path: /api/hooks/networking/cable-spinner-drop-object
---

# CableSpinner.DropObject

> **Hook ID:** `greg.networking.cablespinner.dropobject`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableSpinner.DropObject()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void DropObject()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DropObject` events in `CableSpinner`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablespinner.dropobject", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablespinner.dropobject", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablespinner.dropobject")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablespinner.dropobject", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablespinner.dropobject", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablespinner.dropobject", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
