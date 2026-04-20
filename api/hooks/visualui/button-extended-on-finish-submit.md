---
title: ButtonExtended.OnFinishSubmit
description: Hook event for ButtonExtended.OnFinishSubmit
path: /api/hooks/visualui/button-extended-on-finish-submit
---

# ButtonExtended.OnFinishSubmit

> **Hook ID:** `greg.visualui.buttonextended.onfinishsubmit`
> **Category:** Visualui
> **Namespace:** `UnityEngine.UI`

This hook intercepts calls to `ButtonExtended.OnFinishSubmit()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator OnFinishSubmit()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnFinishSubmit` events in `ButtonExtended`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.buttonextended.onfinishsubmit", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.buttonextended.onfinishsubmit", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.buttonextended.onfinishsubmit")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.buttonextended.onfinishsubmit", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.buttonextended.onfinishsubmit", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.buttonextended.onfinishsubmit", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
