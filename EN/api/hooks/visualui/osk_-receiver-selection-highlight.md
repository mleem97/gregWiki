---
title: OSK_Receiver.SelectionHighlight
description: Hook event for OSK_Receiver.SelectionHighlight
path: /api/hooks/visualui/osk_-receiver-selection-highlight
---

# OSK_Receiver.SelectionHighlight

> **Hook ID:** `greg.visualui.osk_receiver.selectionhighlight`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Receiver.SelectionHighlight()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `SelectionHighlight` events in `OSK_Receiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_receiver.selectionhighlight", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_receiver.selectionhighlight", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_receiver.selectionhighlight")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_receiver.selectionhighlight", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_receiver.selectionhighlight", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_receiver.selectionhighlight", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
