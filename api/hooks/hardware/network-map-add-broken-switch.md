---
title: NetworkMap.AddBrokenSwitch
description: Hook event for NetworkMap.AddBrokenSwitch
path: /api/hooks/hardware/network-map-add-broken-switch
---

# NetworkMap.AddBrokenSwitch

> **Hook ID:** `greg.hardware.networkmap.addbrokenswitch`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.AddBrokenSwitch()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AddBrokenSwitch(NetworkSwitch networkSwitch)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `networkSwitch` | `NetworkSwitch` | ... |


## Using this Hook

::: tip
Use this hook to react to `AddBrokenSwitch` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.networkmap.addbrokenswitch", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.networkmap.addbrokenswitch", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.networkmap.addbrokenswitch")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.networkmap.addbrokenswitch", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.networkmap.addbrokenswitch", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.networkmap.addbrokenswitch", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
