---
title: NetworkSwitch.TurnOffCommonFunctions
description: Hook event for NetworkSwitch.TurnOffCommonFunctions
path: /api/hooks/networking/network-switch-turn-off-common-functions
---

# NetworkSwitch.TurnOffCommonFunctions

> **Hook ID:** `greg.networking.networkswitch.turnoffcommonfunctions`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.TurnOffCommonFunctions()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void TurnOffCommonFunctions()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TurnOffCommonFunctions` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitch.turnoffcommonfunctions", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitch.turnoffcommonfunctions", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitch.turnoffcommonfunctions")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitch.turnoffcommonfunctions", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitch.turnoffcommonfunctions", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitch.turnoffcommonfunctions", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
