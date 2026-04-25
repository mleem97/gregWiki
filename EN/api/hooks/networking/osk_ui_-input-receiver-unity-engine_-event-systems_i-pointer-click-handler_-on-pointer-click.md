---
title: OSK_UI_InputReceiver.UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick
description: Hook event for OSK_UI_InputReceiver.UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick
path: /api/hooks/networking/osk_ui_-input-receiver-unity-engine_-event-systems_i-pointer-click-handler_-on-pointer-click
---

# OSK_UI_InputReceiver.UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick

> **Hook ID:** `greg.networking.osk_ui_inputreceiver.unityengine_eventsystems_ipointerclickhandler_onpointerclick`
> **Category:** Networking
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_InputReceiver.UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `UnityEngine_EventSystems_IPointerClickHandler_OnPointerClick` events in `OSK_UI_InputReceiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.osk_ui_inputreceiver.unityengine_eventsystems_ipointerclickhandler_onpointerclick", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.osk_ui_inputreceiver.unityengine_eventsystems_ipointerclickhandler_onpointerclick", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.osk_ui_inputreceiver.unityengine_eventsystems_ipointerclickhandler_onpointerclick")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.osk_ui_inputreceiver.unityengine_eventsystems_ipointerclickhandler_onpointerclick", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.osk_ui_inputreceiver.unityengine_eventsystems_ipointerclickhandler_onpointerclick", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.osk_ui_inputreceiver.unityengine_eventsystems_ipointerclickhandler_onpointerclick", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
