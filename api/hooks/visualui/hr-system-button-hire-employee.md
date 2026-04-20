---
title: HRSystem.ButtonHireEmployee
description: Hook event for HRSystem.ButtonHireEmployee
path: /api/hooks/visualui/hr-system-button-hire-employee
---

# HRSystem.ButtonHireEmployee

> **Hook ID:** `greg.visualui.hrsystem.buttonhireemployee`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `HRSystem.ButtonHireEmployee()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonHireEmployee(Int32 i)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `i` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ButtonHireEmployee` events in `HRSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.hrsystem.buttonhireemployee", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.hrsystem.buttonhireemployee", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.hrsystem.buttonhireemployee")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.hrsystem.buttonhireemployee", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.hrsystem.buttonhireemployee", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.hrsystem.buttonhireemployee", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
