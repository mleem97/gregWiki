---
title: PauseMenu_TabGroup.Subscribe
description: Hook event for PauseMenu_TabGroup.Subscribe
path: /api/hooks/lifecycle/pause-menu_-tab-group-subscribe
---

# PauseMenu_TabGroup.Subscribe

> **Hook ID:** `greg.lifecycle.pausemenu_tabgroup.subscribe`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PauseMenu_TabGroup.Subscribe()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Subscribe(PauseMenu_TabButton tabbutton)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `tabbutton` | `PauseMenu_TabButton` | ... |


## Using this Hook

::: tip
Use this hook to react to `Subscribe` events in `PauseMenu_TabGroup`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.pausemenu_tabgroup.subscribe", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.pausemenu_tabgroup.subscribe", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.pausemenu_tabgroup.subscribe")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.pausemenu_tabgroup.subscribe", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.pausemenu_tabgroup.subscribe", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.pausemenu_tabgroup.subscribe", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
