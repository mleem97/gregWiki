---
title: ButtonExtended.OnSelect
description: Hook event for ButtonExtended.OnSelect
path: /api/hooks/visualui/button-extended-on-select
---

# ButtonExtended.OnSelect

> **Hook ID:** `greg.visualui.buttonextended.onselect`
> **Category:** Visualui
> **Namespace:** `UnityEngine.UI`

This hook intercepts calls to `ButtonExtended.OnSelect()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnSelect(BaseEventData eventData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `eventData` | `BaseEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnSelect` events in `ButtonExtended`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.buttonextended.onselect", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.buttonextended.onselect", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.buttonextended.onselect")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.buttonextended.onselect", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.buttonextended.onselect", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.buttonextended.onselect", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
