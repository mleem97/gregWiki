---
title: InputManager.StartRebind
description: Hook event for InputManager.StartRebind
path: /api/hooks/input/input-manager-start-rebind
---

# InputManager.StartRebind

> **Hook ID:** `greg.input.inputmanager.startrebind`
> **Category:** Input
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputManager.StartRebind()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void StartRebind(String actionName, Int32 bindingIndex, TextMeshProUGUI statusText, Boolean excludeMouse)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `actionName` | `String` | ... |
| `bindingIndex` | `Int32` | ... |
| `statusText` | `TextMeshProUGUI` | ... |
| `excludeMouse` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `StartRebind` events in `InputManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.inputmanager.startrebind", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.inputmanager.startrebind", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.inputmanager.startrebind")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.inputmanager.startrebind", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.inputmanager.startrebind", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.inputmanager.startrebind", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
