---
title: OSK_UI_CustomReceiver.OnPointerDown
description: Hook event for OSK_UI_CustomReceiver.OnPointerDown
path: /api/hooks/visualui/osk_ui_-custom-receiver-on-pointer-down
---

# OSK_UI_CustomReceiver.OnPointerDown

> **Hook ID:** `greg.visualui.osk_ui_customreceiver.onpointerdown`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_CustomReceiver.OnPointerDown()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnPointerDown(PointerEventData eventData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `eventData` | `PointerEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnPointerDown` events in `OSK_UI_CustomReceiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_customreceiver.onpointerdown", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_customreceiver.onpointerdown", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_customreceiver.onpointerdown")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_customreceiver.onpointerdown", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_customreceiver.onpointerdown", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_customreceiver.onpointerdown", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
