---
title: StaticUIElements.RestorePreviousSelection
description: Hook event for StaticUIElements.RestorePreviousSelection
path: /api/hooks/visualui/static-ui-elements-restore-previous-selection
---

# StaticUIElements.RestorePreviousSelection

> **Hook ID:** `greg.visualui.staticuielements.restorepreviousselection`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.RestorePreviousSelection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RestorePreviousSelection()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RestorePreviousSelection` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.restorepreviousselection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.restorepreviousselection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.restorepreviousselection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.restorepreviousselection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.restorepreviousselection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.restorepreviousselection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
