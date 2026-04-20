---
title: OSK_UI_CustomReceiver.SelectionHighlight
description: Hook event for OSK_UI_CustomReceiver.SelectionHighlight
path: /api/hooks/visualui/osk_ui_-custom-receiver-selection-highlight
---

# OSK_UI_CustomReceiver.SelectionHighlight

> **Hook ID:** `greg.visualui.osk_ui_customreceiver.selectionhighlight`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_CustomReceiver.SelectionHighlight()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SelectionHighlight(Color32 c, Boolean all)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `c` | `Color32` | ... |
| `all` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `SelectionHighlight` events in `OSK_UI_CustomReceiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_customreceiver.selectionhighlight", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_customreceiver.selectionhighlight", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_customreceiver.selectionhighlight")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_customreceiver.selectionhighlight", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_customreceiver.selectionhighlight", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_customreceiver.selectionhighlight", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
