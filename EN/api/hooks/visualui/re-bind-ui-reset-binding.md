---
title: ReBindUI.ResetBinding
description: Hook event for ReBindUI.ResetBinding
path: /api/hooks/visualui/re-bind-ui-reset-binding
---

# ReBindUI.ResetBinding

> **Hook ID:** `greg.visualui.rebindui.resetbinding`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReBindUI.ResetBinding()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ResetBinding()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ResetBinding` events in `ReBindUI`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rebindui.resetbinding", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rebindui.resetbinding", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rebindui.resetbinding")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rebindui.resetbinding", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rebindui.resetbinding", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rebindui.resetbinding", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
