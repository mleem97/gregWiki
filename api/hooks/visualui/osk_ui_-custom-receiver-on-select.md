---
title: OSK_UI_CustomReceiver.OnSelect
description: Hook event for OSK_UI_CustomReceiver.OnSelect
path: /api/hooks/visualui/osk_ui_-custom-receiver-on-select
---

# OSK_UI_CustomReceiver.OnSelect

> **Hook ID:** `greg.visualui.osk_ui_customreceiver.onselect`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_CustomReceiver.OnSelect()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnSelect(BaseEventData eventData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `eventData` | `BaseEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnSelect` events in `OSK_UI_CustomReceiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_customreceiver.onselect", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_customreceiver.onselect", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_customreceiver.onselect")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_customreceiver.onselect", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_customreceiver.onselect", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_customreceiver.onselect", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
