---
title: NetworkMap.ResolveThroughPatchPanel
description: Hook event for NetworkMap.ResolveThroughPatchPanel
path: /api/hooks/visualui/network-map-resolve-through-patch-panel
---

# NetworkMap.ResolveThroughPatchPanel

> **Hook ID:** `greg.visualui.networkmap.resolvethroughpatchpanel`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.ResolveThroughPatchPanel()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String ResolveThroughPatchPanel(String patchPanelPort, String fromDevice)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `patchPanelPort` | `String` | ... |
| `fromDevice` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `ResolveThroughPatchPanel` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.networkmap.resolvethroughpatchpanel", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.networkmap.resolvethroughpatchpanel", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.networkmap.resolvethroughpatchpanel")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.networkmap.resolvethroughpatchpanel", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.networkmap.resolvethroughpatchpanel", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.networkmap.resolvethroughpatchpanel", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
