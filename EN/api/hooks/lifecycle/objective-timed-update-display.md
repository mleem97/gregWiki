---
title: ObjectiveTimed.UpdateDisplay
description: Hook event for ObjectiveTimed.UpdateDisplay
path: /api/hooks/lifecycle/objective-timed-update-display
---

# ObjectiveTimed.UpdateDisplay

> **Hook ID:** `greg.lifecycle.objectivetimed.updatedisplay`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ObjectiveTimed.UpdateDisplay()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateDisplay(Int32 currentIOPS, Int32 remainingTime)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `currentIOPS` | `Int32` | ... |
| `remainingTime` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateDisplay` events in `ObjectiveTimed`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.objectivetimed.updatedisplay", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.objectivetimed.updatedisplay", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.objectivetimed.updatedisplay")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.objectivetimed.updatedisplay", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.objectivetimed.updatedisplay", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.objectivetimed.updatedisplay", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
