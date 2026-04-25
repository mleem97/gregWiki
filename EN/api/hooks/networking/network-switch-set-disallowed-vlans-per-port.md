---
title: NetworkSwitch.SetDisallowedVlansPerPort
description: Hook event for NetworkSwitch.SetDisallowedVlansPerPort
path: /api/hooks/networking/network-switch-set-disallowed-vlans-per-port
---

# NetworkSwitch.SetDisallowedVlansPerPort

> **Hook ID:** `greg.networking.networkswitch.setdisallowedvlansperport`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.SetDisallowedVlansPerPort()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetDisallowedVlansPerPort(Dictionary`2 data)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `data` | `Dictionary`2` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetDisallowedVlansPerPort` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitch.setdisallowedvlansperport", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitch.setdisallowedvlansperport", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitch.setdisallowedvlansperport")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitch.setdisallowedvlansperport", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitch.setdisallowedvlansperport", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitch.setdisallowedvlansperport", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
