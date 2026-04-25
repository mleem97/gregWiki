---
title: CableSpinner.UpdateCurrentLength
description: Hook event for CableSpinner.UpdateCurrentLength
path: /api/hooks/networking/cable-spinner-update-current-length
---

# CableSpinner.UpdateCurrentLength

> **Hook ID:** `greg.networking.cablespinner.updatecurrentlength`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableSpinner.UpdateCurrentLength()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateCurrentLength(Single length)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `length` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateCurrentLength` events in `CableSpinner`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablespinner.updatecurrentlength", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablespinner.updatecurrentlength", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablespinner.updatecurrentlength")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablespinner.updatecurrentlength", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablespinner.updatecurrentlength", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablespinner.updatecurrentlength", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
