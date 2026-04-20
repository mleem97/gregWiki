---
title: UI_SelectedBorder.OnDisable
description: Hook event for UI_SelectedBorder.OnDisable
path: /api/hooks/visualui/ui_-selected-border-on-disable
---

# UI_SelectedBorder.OnDisable

> **Hook ID:** `greg.visualui.ui_selectedborder.ondisable`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UI_SelectedBorder.OnDisable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnDisable()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnDisable` events in `UI_SelectedBorder`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.ui_selectedborder.ondisable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.ui_selectedborder.ondisable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.ui_selectedborder.ondisable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.ui_selectedborder.ondisable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.ui_selectedborder.ondisable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.ui_selectedborder.ondisable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
