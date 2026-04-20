---
title: InputManager.LoadBindingOverride
description: Hook event for InputManager.LoadBindingOverride
path: /api/hooks/persistence/input-manager-load-binding-override
---

# InputManager.LoadBindingOverride

> **Hook ID:** `greg.persistence.inputmanager.loadbindingoverride`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputManager.LoadBindingOverride()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadBindingOverride(String actionName)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `actionName` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadBindingOverride` events in `InputManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.inputmanager.loadbindingoverride", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.inputmanager.loadbindingoverride", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.inputmanager.loadbindingoverride")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.inputmanager.loadbindingoverride", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.inputmanager.loadbindingoverride", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.inputmanager.loadbindingoverride", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
