---
title: Technician.GetCorrectDevicePrefab
description: Hook event for Technician.GetCorrectDevicePrefab
path: /api/hooks/networking/technician-get-correct-device-prefab
---

# Technician.GetCorrectDevicePrefab

> **Hook ID:** `greg.networking.technician.getcorrectdeviceprefab`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.GetCorrectDevicePrefab()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
GameObject GetCorrectDevicePrefab()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetCorrectDevicePrefab` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.technician.getcorrectdeviceprefab", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.technician.getcorrectdeviceprefab", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.technician.getcorrectdeviceprefab")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.technician.getcorrectdeviceprefab", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.technician.getcorrectdeviceprefab", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.technician.getcorrectdeviceprefab", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `GameObject`
- **Safe to block?**: Yes
