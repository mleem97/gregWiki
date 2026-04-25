---
title: InputManager.ResetBinding
description: Hook event for InputManager.ResetBinding
path: /api/hooks/input/input-manager-reset-binding
---

# InputManager.ResetBinding

> **Hook ID:** `greg.input.inputmanager.resetbinding`
> **Category:** Input
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputManager.ResetBinding()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ResetBinding(String actionName, Int32 bindingIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `actionName` | `String` | ... |
| `bindingIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ResetBinding` events in `InputManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.inputmanager.resetbinding", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.inputmanager.resetbinding", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.inputmanager.resetbinding")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.inputmanager.resetbinding", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.inputmanager.resetbinding", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.inputmanager.resetbinding", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
