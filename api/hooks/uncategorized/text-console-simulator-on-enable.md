---
title: TextConsoleSimulator.OnEnable
description: Hook event for TextConsoleSimulator.OnEnable
path: /api/hooks/uncategorized/text-console-simulator-on-enable
---

# TextConsoleSimulator.OnEnable

> **Hook ID:** `greg.uncategorized.textconsolesimulator.onenable`
> **Category:** Uncategorized
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TextConsoleSimulator.OnEnable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnEnable()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnEnable` events in `TextConsoleSimulator`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.textconsolesimulator.onenable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.textconsolesimulator.onenable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.textconsolesimulator.onenable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.textconsolesimulator.onenable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.textconsolesimulator.onenable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.textconsolesimulator.onenable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
