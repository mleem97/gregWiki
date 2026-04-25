---
title: InputManager.DoRebind
description: Hook event for InputManager.DoRebind
path: /api/hooks/input/input-manager-do-rebind
---

# InputManager.DoRebind

> **Hook ID:** `greg.input.inputmanager.dorebind`
> **Category:** Input
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputManager.DoRebind()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void DoRebind(InputAction actionToRebind, Int32 bindingIndex, TextMeshProUGUI statusText, Boolean allCompositeParts, Boolean excludeMouse)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `actionToRebind` | `InputAction` | ... |
| `bindingIndex` | `Int32` | ... |
| `statusText` | `TextMeshProUGUI` | ... |
| `allCompositeParts` | `Boolean` | ... |
| `excludeMouse` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `DoRebind` events in `InputManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.inputmanager.dorebind", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.inputmanager.dorebind", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.inputmanager.dorebind")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.inputmanager.dorebind", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.inputmanager.dorebind", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.inputmanager.dorebind", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
