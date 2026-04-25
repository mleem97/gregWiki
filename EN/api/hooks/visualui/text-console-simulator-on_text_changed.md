---
title: TextConsoleSimulator.ON_TEXT_CHANGED
description: Hook event for TextConsoleSimulator.ON_TEXT_CHANGED
path: /api/hooks/visualui/text-console-simulator-on_text_changed
---

# TextConsoleSimulator.ON_TEXT_CHANGED

> **Hook ID:** `greg.visualui.textconsolesimulator.on_text_changed`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TextConsoleSimulator.ON_TEXT_CHANGED()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ON_TEXT_CHANGED(Object obj)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `obj` | `Object` | ... |


## Using this Hook

::: tip
Use this hook to react to `ON_TEXT_CHANGED` events in `TextConsoleSimulator`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.textconsolesimulator.on_text_changed", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.textconsolesimulator.on_text_changed", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.textconsolesimulator.on_text_changed")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.textconsolesimulator.on_text_changed", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.textconsolesimulator.on_text_changed", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.textconsolesimulator.on_text_changed", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
