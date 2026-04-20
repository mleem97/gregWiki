---
title: PatchPanel.IsAnyCableConnected
description: Hook event for PatchPanel.IsAnyCableConnected
path: /api/hooks/networking/patch-panel-is-any-cable-connected
---

# PatchPanel.IsAnyCableConnected

> **Hook ID:** `greg.networking.patchpanel.isanycableconnected`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PatchPanel.IsAnyCableConnected()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsAnyCableConnected()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `IsAnyCableConnected` events in `PatchPanel`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.patchpanel.isanycableconnected", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.patchpanel.isanycableconnected", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.patchpanel.isanycableconnected")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.patchpanel.isanycableconnected", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.patchpanel.isanycableconnected", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.patchpanel.isanycableconnected", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
