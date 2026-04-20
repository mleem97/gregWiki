---
title: NetworkSwitchConfiguration.BuildPatchPanelCache
description: Hook event for NetworkSwitchConfiguration.BuildPatchPanelCache
path: /api/hooks/visualui/network-switch-configuration-build-patch-panel-cache
---

# NetworkSwitchConfiguration.BuildPatchPanelCache

> **Hook ID:** `greg.visualui.networkswitchconfiguration.buildpatchpanelcache`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.BuildPatchPanelCache()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void BuildPatchPanelCache()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `BuildPatchPanelCache` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.networkswitchconfiguration.buildpatchpanelcache", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.networkswitchconfiguration.buildpatchpanelcache", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.networkswitchconfiguration.buildpatchpanelcache")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.networkswitchconfiguration.buildpatchpanelcache", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.networkswitchconfiguration.buildpatchpanelcache", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.networkswitchconfiguration.buildpatchpanelcache", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
