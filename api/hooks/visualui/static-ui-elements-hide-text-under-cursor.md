---
title: StaticUIElements.HideTextUnderCursor
description: Hook event for StaticUIElements.HideTextUnderCursor
path: /api/hooks/visualui/static-ui-elements-hide-text-under-cursor
---

# StaticUIElements.HideTextUnderCursor

> **Hook ID:** `greg.visualui.staticuielements.hidetextundercursor`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.HideTextUnderCursor()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void HideTextUnderCursor()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `HideTextUnderCursor` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.hidetextundercursor", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.hidetextundercursor", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.hidetextundercursor")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.hidetextundercursor", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.hidetextundercursor", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.hidetextundercursor", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
