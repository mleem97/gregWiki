---
title: NetworkMap.IsPatchPanelPort
description: Hook event for NetworkMap.IsPatchPanelPort
path: /api/hooks/visualui/network-map-is-patch-panel-port
---

# NetworkMap.IsPatchPanelPort

> **Hook ID:** `greg.visualui.networkmap.ispatchpanelport`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.IsPatchPanelPort()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsPatchPanelPort(String deviceName)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `deviceName` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsPatchPanelPort` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.networkmap.ispatchpanelport", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.networkmap.ispatchpanelport", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.networkmap.ispatchpanelport")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.networkmap.ispatchpanelport", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.networkmap.ispatchpanelport", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.networkmap.ispatchpanelport", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
