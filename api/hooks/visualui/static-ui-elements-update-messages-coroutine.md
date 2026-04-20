---
title: StaticUIElements.UpdateMessagesCoroutine
description: Hook event for StaticUIElements.UpdateMessagesCoroutine
path: /api/hooks/visualui/static-ui-elements-update-messages-coroutine
---

# StaticUIElements.UpdateMessagesCoroutine

> **Hook ID:** `greg.visualui.staticuielements.updatemessagescoroutine`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.UpdateMessagesCoroutine()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator UpdateMessagesCoroutine()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `UpdateMessagesCoroutine` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.updatemessagescoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.updatemessagescoroutine", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.updatemessagescoroutine")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.updatemessagescoroutine", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.updatemessagescoroutine", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.updatemessagescoroutine", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
