---
title: NetworkMap.GetAllBrokenSwitches
description: Hook event for NetworkMap.GetAllBrokenSwitches
path: /api/hooks/hardware/network-map-get-all-broken-switches
---

# NetworkMap.GetAllBrokenSwitches

> **Hook ID:** `greg.hardware.networkmap.getallbrokenswitches`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.GetAllBrokenSwitches()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerable`1 GetAllBrokenSwitches()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetAllBrokenSwitches` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.networkmap.getallbrokenswitches", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.networkmap.getallbrokenswitches", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.networkmap.getallbrokenswitches")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.networkmap.getallbrokenswitches", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.networkmap.getallbrokenswitches", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.networkmap.getallbrokenswitches", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerable`1`
- **Safe to block?**: Yes
