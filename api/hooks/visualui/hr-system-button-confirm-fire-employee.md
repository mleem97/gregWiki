---
title: HRSystem.ButtonConfirmFireEmployee
description: Hook event for HRSystem.ButtonConfirmFireEmployee
path: /api/hooks/visualui/hr-system-button-confirm-fire-employee
---

# HRSystem.ButtonConfirmFireEmployee

> **Hook ID:** `greg.visualui.hrsystem.buttonconfirmfireemployee`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `HRSystem.ButtonConfirmFireEmployee()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonConfirmFireEmployee()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonConfirmFireEmployee` events in `HRSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.hrsystem.buttonconfirmfireemployee", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.hrsystem.buttonconfirmfireemployee", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.hrsystem.buttonconfirmfireemployee")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.hrsystem.buttonconfirmfireemployee", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.hrsystem.buttonconfirmfireemployee", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.hrsystem.buttonconfirmfireemployee", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
