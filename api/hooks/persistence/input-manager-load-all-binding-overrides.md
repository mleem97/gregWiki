---
title: InputManager.LoadAllBindingOverrides
description: Hook event for InputManager.LoadAllBindingOverrides
path: /api/hooks/persistence/input-manager-load-all-binding-overrides
---

# InputManager.LoadAllBindingOverrides

> **Hook ID:** `greg.persistence.inputmanager.loadallbindingoverrides`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputManager.LoadAllBindingOverrides()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadAllBindingOverrides()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `LoadAllBindingOverrides` events in `InputManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.inputmanager.loadallbindingoverrides", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.inputmanager.loadallbindingoverrides", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.inputmanager.loadallbindingoverrides")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.inputmanager.loadallbindingoverrides", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.inputmanager.loadallbindingoverrides", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.inputmanager.loadallbindingoverrides", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
