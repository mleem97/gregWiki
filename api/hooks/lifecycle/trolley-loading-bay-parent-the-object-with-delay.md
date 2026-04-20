---
title: TrolleyLoadingBay.ParentTheObjectWithDelay
description: Hook event for TrolleyLoadingBay.ParentTheObjectWithDelay
path: /api/hooks/lifecycle/trolley-loading-bay-parent-the-object-with-delay
---

# TrolleyLoadingBay.ParentTheObjectWithDelay

> **Hook ID:** `greg.lifecycle.trolleyloadingbay.parenttheobjectwithdelay`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TrolleyLoadingBay.ParentTheObjectWithDelay()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator ParentTheObjectWithDelay(UsableObject uo)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `uo` | `UsableObject` | ... |


## Using this Hook

::: tip
Use this hook to react to `ParentTheObjectWithDelay` events in `TrolleyLoadingBay`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.trolleyloadingbay.parenttheobjectwithdelay", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.trolleyloadingbay.parenttheobjectwithdelay", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.trolleyloadingbay.parenttheobjectwithdelay")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.trolleyloadingbay.parenttheobjectwithdelay", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.trolleyloadingbay.parenttheobjectwithdelay", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.trolleyloadingbay.parenttheobjectwithdelay", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
