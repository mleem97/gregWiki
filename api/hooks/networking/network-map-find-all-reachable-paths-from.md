---
title: NetworkMap.FindAllReachablePathsFrom
description: Hook event for NetworkMap.FindAllReachablePathsFrom
path: /api/hooks/networking/network-map-find-all-reachable-paths-from
---

# NetworkMap.FindAllReachablePathsFrom

> **Hook ID:** `greg.networking.networkmap.findallreachablepathsfrom`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.FindAllReachablePathsFrom()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Dictionary`2 FindAllReachablePathsFrom(String startDevice)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `startDevice` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `FindAllReachablePathsFrom` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.findallreachablepathsfrom", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.findallreachablepathsfrom", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.findallreachablepathsfrom")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.findallreachablepathsfrom", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.findallreachablepathsfrom", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.findallreachablepathsfrom", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Dictionary`2`
- **Safe to block?**: Yes
