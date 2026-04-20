---
title: NetworkSwitchConfiguration.CloseConfig
description: Hook event for NetworkSwitchConfiguration.CloseConfig
path: /api/hooks/networking/network-switch-configuration-close-config
---

# NetworkSwitchConfiguration.CloseConfig

> **Hook ID:** `greg.networking.networkswitchconfiguration.closeconfig`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.CloseConfig()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CloseConfig()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CloseConfig` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitchconfiguration.closeconfig", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitchconfiguration.closeconfig", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitchconfiguration.closeconfig")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitchconfiguration.closeconfig", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitchconfiguration.closeconfig", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitchconfiguration.closeconfig", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
