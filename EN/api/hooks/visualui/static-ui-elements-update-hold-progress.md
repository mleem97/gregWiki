---
title: StaticUIElements.UpdateHoldProgress
description: Hook event for StaticUIElements.UpdateHoldProgress
path: /api/hooks/visualui/static-ui-elements-update-hold-progress
---

# StaticUIElements.UpdateHoldProgress

> **Hook ID:** `greg.visualui.staticuielements.updateholdprogress`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.UpdateHoldProgress()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateHoldProgress(Single value)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `value` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateHoldProgress` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.updateholdprogress", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.updateholdprogress", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.updateholdprogress")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.updateholdprogress", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.updateholdprogress", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.updateholdprogress", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
