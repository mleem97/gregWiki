---
title: FirstPersonController.OnDestroy
description: Hook event for FirstPersonController.OnDestroy
path: /api/hooks/lifecycle/first-person-controller-on-destroy
---

# FirstPersonController.OnDestroy

> **Hook ID:** `greg.lifecycle.firstpersoncontroller.ondestroy`
> **Category:** Lifecycle
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `FirstPersonController.OnDestroy()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnDestroy()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnDestroy` events in `FirstPersonController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.firstpersoncontroller.ondestroy", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.firstpersoncontroller.ondestroy", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.firstpersoncontroller.ondestroy")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.firstpersoncontroller.ondestroy", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.firstpersoncontroller.ondestroy", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.firstpersoncontroller.ondestroy", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
