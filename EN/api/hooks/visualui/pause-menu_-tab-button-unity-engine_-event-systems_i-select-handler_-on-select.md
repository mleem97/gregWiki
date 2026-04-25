---
title: PauseMenu_TabButton.UnityEngine_EventSystems_ISelectHandler_OnSelect
description: Hook event for PauseMenu_TabButton.UnityEngine_EventSystems_ISelectHandler_OnSelect
path: /api/hooks/visualui/pause-menu_-tab-button-unity-engine_-event-systems_i-select-handler_-on-select
---

# PauseMenu_TabButton.UnityEngine_EventSystems_ISelectHandler_OnSelect

> **Hook ID:** `greg.visualui.pausemenu_tabbutton.unityengine_eventsystems_iselecthandler_onselect`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PauseMenu_TabButton.UnityEngine_EventSystems_ISelectHandler_OnSelect()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UnityEngine_EventSystems_ISelectHandler_OnSelect(BaseEventData eventData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `eventData` | `BaseEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `UnityEngine_EventSystems_ISelectHandler_OnSelect` events in `PauseMenu_TabButton`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.pausemenu_tabbutton.unityengine_eventsystems_iselecthandler_onselect", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.pausemenu_tabbutton.unityengine_eventsystems_iselecthandler_onselect", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.pausemenu_tabbutton.unityengine_eventsystems_iselecthandler_onselect")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.pausemenu_tabbutton.unityengine_eventsystems_iselecthandler_onselect", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.pausemenu_tabbutton.unityengine_eventsystems_iselecthandler_onselect", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.pausemenu_tabbutton.unityengine_eventsystems_iselecthandler_onselect", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
