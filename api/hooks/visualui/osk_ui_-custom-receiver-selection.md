---
title: OSK_UI_CustomReceiver.Selection
description: Hook event for OSK_UI_CustomReceiver.Selection
path: /api/hooks/visualui/osk_ui_-custom-receiver-selection
---

# OSK_UI_CustomReceiver.Selection

> **Hook ID:** `greg.visualui.osk_ui_customreceiver.selection`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_CustomReceiver.Selection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 Selection(Vector3 hitpoint, Boolean charhit)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `hitpoint` | `Vector3` | ... |
| `charhit` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `Selection` events in `OSK_UI_CustomReceiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_customreceiver.selection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_customreceiver.selection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_customreceiver.selection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_customreceiver.selection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_customreceiver.selection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_customreceiver.selection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
