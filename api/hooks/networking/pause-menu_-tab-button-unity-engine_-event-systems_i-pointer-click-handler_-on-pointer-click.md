---
title: PauseMenu_TabButton.UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick
description: Hook event for PauseMenu_TabButton.UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick
path: /api/hooks/networking/pause-menu_-tab-button-unity-engine_-event-systems_i-pointer-click-handler_-on-pointer-click
---

# PauseMenu_TabButton.UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick

> **Hook ID:** `greg.networking.pausemenu_tabbutton.unityengine_eventsystems_ipointerclickhandler_onpointerclick`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PauseMenu_TabButton.UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick(PointerEventData eventData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `eventData` | `PointerEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick` events in `PauseMenu_TabButton`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.pausemenu_tabbutton.unityengine_eventsystems_ipointerclickhandler_onpointerclick", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.pausemenu_tabbutton.unityengine_eventsystems_ipointerclickhandler_onpointerclick", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.pausemenu_tabbutton.unityengine_eventsystems_ipointerclickhandler_onpointerclick")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.pausemenu_tabbutton.unityengine_eventsystems_ipointerclickhandler_onpointerclick", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.pausemenu_tabbutton.unityengine_eventsystems_ipointerclickhandler_onpointerclick", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.pausemenu_tabbutton.unityengine_eventsystems_ipointerclickhandler_onpointerclick", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
