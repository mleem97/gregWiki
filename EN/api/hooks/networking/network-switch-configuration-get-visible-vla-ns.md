---
title: NetworkSwitchConfiguration.GetVisibleVLANs
description: Hook event for NetworkSwitchConfiguration.GetVisibleVLANs
path: /api/hooks/networking/network-switch-configuration-get-visible-vla-ns
---

# NetworkSwitchConfiguration.GetVisibleVLANs

> **Hook ID:** `greg.networking.networkswitchconfiguration.getvisiblevlans`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.GetVisibleVLANs()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
HashSet`1 GetVisibleVLANs()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetVisibleVLANs` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitchconfiguration.getvisiblevlans", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitchconfiguration.getvisiblevlans", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitchconfiguration.getvisiblevlans")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitchconfiguration.getvisiblevlans", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitchconfiguration.getvisiblevlans", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitchconfiguration.getvisiblevlans", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `HashSet`1`
- **Safe to block?**: Yes
