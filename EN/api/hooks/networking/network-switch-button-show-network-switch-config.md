---
title: NetworkSwitch.ButtonShowNetworkSwitchConfig
description: Hook event for NetworkSwitch.ButtonShowNetworkSwitchConfig
path: /api/hooks/networking/network-switch-button-show-network-switch-config
---

# NetworkSwitch.ButtonShowNetworkSwitchConfig

> **Hook ID:** `greg.networking.networkswitch.buttonshownetworkswitchconfig`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.ButtonShowNetworkSwitchConfig()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonShowNetworkSwitchConfig()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonShowNetworkSwitchConfig` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitch.buttonshownetworkswitchconfig", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitch.buttonshownetworkswitchconfig", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitch.buttonshownetworkswitchconfig")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitch.buttonshownetworkswitchconfig", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitch.buttonshownetworkswitchconfig", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitch.buttonshownetworkswitchconfig", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
