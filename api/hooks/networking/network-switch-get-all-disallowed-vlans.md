---
title: NetworkSwitch.GetAllDisallowedVlans
description: Hook event for NetworkSwitch.GetAllDisallowedVlans
path: /api/hooks/networking/network-switch-get-all-disallowed-vlans
---

# NetworkSwitch.GetAllDisallowedVlans

> **Hook ID:** `greg.networking.networkswitch.getalldisallowedvlans`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.GetAllDisallowedVlans()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Dictionary`2 GetAllDisallowedVlans()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetAllDisallowedVlans` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitch.getalldisallowedvlans", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitch.getalldisallowedvlans", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitch.getalldisallowedvlans")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitch.getalldisallowedvlans", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitch.getalldisallowedvlans", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitch.getalldisallowedvlans", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Dictionary`2`
- **Safe to block?**: Yes
