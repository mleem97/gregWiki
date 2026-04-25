---
title: ToolTipOnUIText.OnPointerEnter
description: Hook event for ToolTipOnUIText.OnPointerEnter
path: /api/hooks/visualui/tool-tip-on-ui-text-on-pointer-enter
---

# ToolTipOnUIText.OnPointerEnter

> **Hook ID:** `greg.visualui.tooltiponuitext.onpointerenter`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ToolTipOnUIText.OnPointerEnter()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnPointerEnter(PointerEventData eventData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `eventData` | `PointerEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnPointerEnter` events in `ToolTipOnUIText`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tooltiponuitext.onpointerenter", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tooltiponuitext.onpointerenter", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tooltiponuitext.onpointerenter")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tooltiponuitext.onpointerenter", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tooltiponuitext.onpointerenter", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tooltiponuitext.onpointerenter", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
