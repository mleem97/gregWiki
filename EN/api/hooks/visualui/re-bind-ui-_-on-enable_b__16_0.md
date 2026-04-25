---
title: ReBindUI._OnEnable_b__16_0
description: Hook event for ReBindUI._OnEnable_b__16_0
path: /api/hooks/visualui/re-bind-ui-_-on-enable_b__16_0
---

# ReBindUI._OnEnable_b__16_0

> **Hook ID:** `greg.visualui.rebindui._onenable_b__16_0`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReBindUI._OnEnable_b__16_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void _OnEnable_b__16_0()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `_OnEnable_b__16_0` events in `ReBindUI`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rebindui._onenable_b__16_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rebindui._onenable_b__16_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rebindui._onenable_b__16_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rebindui._onenable_b__16_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rebindui._onenable_b__16_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rebindui._onenable_b__16_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
