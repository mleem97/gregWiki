---
title: CableSpinner.IsCableLenghtEnough
description: Hook event for CableSpinner.IsCableLenghtEnough
path: /api/hooks/networking/cable-spinner-is-cable-lenght-enough
---

# CableSpinner.IsCableLenghtEnough

> **Hook ID:** `greg.networking.cablespinner.iscablelenghtenough`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableSpinner.IsCableLenghtEnough()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsCableLenghtEnough()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `IsCableLenghtEnough` events in `CableSpinner`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablespinner.iscablelenghtenough", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablespinner.iscablelenghtenough", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablespinner.iscablelenghtenough")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablespinner.iscablelenghtenough", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablespinner.iscablelenghtenough", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablespinner.iscablelenghtenough", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
