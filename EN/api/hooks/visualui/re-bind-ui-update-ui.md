---
title: ReBindUI.UpdateUI
description: Hook event for ReBindUI.UpdateUI
path: /api/hooks/visualui/re-bind-ui-update-ui
---

# ReBindUI.UpdateUI

> **Hook ID:** `greg.visualui.rebindui.updateui`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReBindUI.UpdateUI()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateUI()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `UpdateUI` events in `ReBindUI`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rebindui.updateui", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rebindui.updateui", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rebindui.updateui")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rebindui.updateui", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rebindui.updateui", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rebindui.updateui", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
