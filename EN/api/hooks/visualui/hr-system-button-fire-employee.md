---
title: HRSystem.ButtonFireEmployee
description: Hook event for HRSystem.ButtonFireEmployee
path: /api/hooks/visualui/hr-system-button-fire-employee
---

# HRSystem.ButtonFireEmployee

> **Hook ID:** `greg.visualui.hrsystem.buttonfireemployee`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `HRSystem.ButtonFireEmployee()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonFireEmployee(Int32 i)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `i` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ButtonFireEmployee` events in `HRSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.hrsystem.buttonfireemployee", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.hrsystem.buttonfireemployee", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.hrsystem.buttonfireemployee")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.hrsystem.buttonfireemployee", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.hrsystem.buttonfireemployee", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.hrsystem.buttonfireemployee", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
