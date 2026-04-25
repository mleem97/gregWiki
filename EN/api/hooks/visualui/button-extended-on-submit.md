---
title: ButtonExtended.OnSubmit
description: Hook event for ButtonExtended.OnSubmit
path: /api/hooks/visualui/button-extended-on-submit
---

# ButtonExtended.OnSubmit

> **Hook ID:** `greg.visualui.buttonextended.onsubmit`
> **Category:** Visualui
> **Namespace:** `UnityEngine.UI`

This hook intercepts calls to `ButtonExtended.OnSubmit()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnSubmit(BaseEventData eventData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `eventData` | `BaseEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnSubmit` events in `ButtonExtended`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.buttonextended.onsubmit", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.buttonextended.onsubmit", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.buttonextended.onsubmit")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.buttonextended.onsubmit", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.buttonextended.onsubmit", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.buttonextended.onsubmit", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
