---
title: ToolTipOnUIText.OnSelect
description: Hook event for ToolTipOnUIText.OnSelect
path: /api/hooks/visualui/tool-tip-on-ui-text-on-select
---

# ToolTipOnUIText.OnSelect

> **Hook ID:** `greg.visualui.tooltiponuitext.onselect`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ToolTipOnUIText.OnSelect()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnSelect()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnSelect` events in `ToolTipOnUIText`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tooltiponuitext.onselect", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tooltiponuitext.onselect", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tooltiponuitext.onselect")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tooltiponuitext.onselect", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tooltiponuitext.onselect", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tooltiponuitext.onselect", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
