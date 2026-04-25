---
title: AssetManagement.ButtonAddAllBrokenDevicesToQueue
description: Hook event for AssetManagement.ButtonAddAllBrokenDevicesToQueue
path: /api/hooks/networking/asset-management-button-add-all-broken-devices-to-queue
---

# AssetManagement.ButtonAddAllBrokenDevicesToQueue

> **Hook ID:** `greg.networking.assetmanagement.buttonaddallbrokendevicestoqueue`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagement.ButtonAddAllBrokenDevicesToQueue()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonAddAllBrokenDevicesToQueue()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonAddAllBrokenDevicesToQueue` events in `AssetManagement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.assetmanagement.buttonaddallbrokendevicestoqueue", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.assetmanagement.buttonaddallbrokendevicestoqueue", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.assetmanagement.buttonaddallbrokendevicestoqueue")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.assetmanagement.buttonaddallbrokendevicestoqueue", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.assetmanagement.buttonaddallbrokendevicestoqueue", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.assetmanagement.buttonaddallbrokendevicestoqueue", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
