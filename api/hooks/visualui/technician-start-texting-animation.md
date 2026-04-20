---
title: Technician.StartTextingAnimation
description: Hook event for Technician.StartTextingAnimation
path: /api/hooks/visualui/technician-start-texting-animation
---

# Technician.StartTextingAnimation

> **Hook ID:** `greg.visualui.technician.starttextinganimation`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.StartTextingAnimation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator StartTextingAnimation()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `StartTextingAnimation` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.technician.starttextinganimation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.technician.starttextinganimation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.technician.starttextinganimation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.technician.starttextinganimation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.technician.starttextinganimation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.technician.starttextinganimation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
