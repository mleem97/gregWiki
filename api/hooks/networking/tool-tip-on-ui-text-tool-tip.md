---
title: ToolTipOnUIText.ToolTip
description: Hook event for ToolTipOnUIText.ToolTip
path: /api/hooks/networking/tool-tip-on-ui-text-tool-tip
---

# ToolTipOnUIText.ToolTip

> **Hook ID:** `greg.networking.tooltiponuitext.tooltip`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ToolTipOnUIText.ToolTip()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ToolTip()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ToolTip` events in `ToolTipOnUIText`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.tooltiponuitext.tooltip", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.tooltiponuitext.tooltip", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.tooltiponuitext.tooltip")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.tooltiponuitext.tooltip", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.tooltiponuitext.tooltip", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.tooltiponuitext.tooltip", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
