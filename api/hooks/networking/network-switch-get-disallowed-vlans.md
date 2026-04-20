---
title: NetworkSwitch.GetDisallowedVlans
description: Hook event for NetworkSwitch.GetDisallowedVlans
path: /api/hooks/networking/network-switch-get-disallowed-vlans
---

# NetworkSwitch.GetDisallowedVlans

> **Hook ID:** `greg.networking.networkswitch.getdisallowedvlans`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.GetDisallowedVlans()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
HashSet`1 GetDisallowedVlans(Int32 portIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `portIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetDisallowedVlans` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitch.getdisallowedvlans", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitch.getdisallowedvlans", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitch.getdisallowedvlans")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitch.getdisallowedvlans", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitch.getdisallowedvlans", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitch.getdisallowedvlans", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `HashSet`1`
- **Safe to block?**: Yes
