---
title: InputManager.SaveBindingOverride
description: Hook event for InputManager.SaveBindingOverride
path: /api/hooks/persistence/input-manager-save-binding-override
---

# InputManager.SaveBindingOverride

> **Hook ID:** `greg.persistence.inputmanager.savebindingoverride`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputManager.SaveBindingOverride()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SaveBindingOverride(InputAction action)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `action` | `InputAction` | ... |


## Using this Hook

::: tip
Use this hook to react to `SaveBindingOverride` events in `InputManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.inputmanager.savebindingoverride", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.inputmanager.savebindingoverride", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.inputmanager.savebindingoverride")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.inputmanager.savebindingoverride", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.inputmanager.savebindingoverride", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.inputmanager.savebindingoverride", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
