---
title: PauseMenu_TabGroup.OnTabSelected
description: Hook event for PauseMenu_TabGroup.OnTabSelected
path: /api/hooks/visualui/pause-menu_-tab-group-on-tab-selected
---

# PauseMenu_TabGroup.OnTabSelected

> **Hook ID:** `greg.visualui.pausemenu_tabgroup.ontabselected`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PauseMenu_TabGroup.OnTabSelected()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnTabSelected(PauseMenu_TabButton tabbutton)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `tabbutton` | `PauseMenu_TabButton` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnTabSelected` events in `PauseMenu_TabGroup`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.pausemenu_tabgroup.ontabselected", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.pausemenu_tabgroup.ontabselected", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.pausemenu_tabgroup.ontabselected")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.pausemenu_tabgroup.ontabselected", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.pausemenu_tabgroup.ontabselected", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.pausemenu_tabgroup.ontabselected", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
