---
title: AutoDisable.TurnOffAfterXseconds
description: Hook event for AutoDisable.TurnOffAfterXseconds
path: /api/hooks/uncategorized/auto-disable-turn-off-after-xseconds
---

# AutoDisable.TurnOffAfterXseconds

> **Hook ID:** `greg.uncategorized.autodisable.turnoffafterxseconds`
> **Category:** Uncategorized
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AutoDisable.TurnOffAfterXseconds()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator TurnOffAfterXseconds()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TurnOffAfterXseconds` events in `AutoDisable`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.autodisable.turnoffafterxseconds", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.autodisable.turnoffafterxseconds", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.autodisable.turnoffafterxseconds")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.autodisable.turnoffafterxseconds", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.autodisable.turnoffafterxseconds", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.autodisable.turnoffafterxseconds", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
