---
title: NetworkMap.FindPhysicalPath
description: Hook event for NetworkMap.FindPhysicalPath
path: /api/hooks/networking/network-map-find-physical-path
---

# NetworkMap.FindPhysicalPath

> **Hook ID:** `greg.networking.networkmap.findphysicalpath`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.FindPhysicalPath()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
List`1 FindPhysicalPath(String start, String target)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `start` | `String` | ... |
| `target` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `FindPhysicalPath` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.findphysicalpath", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.findphysicalpath", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.findphysicalpath")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.findphysicalpath", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.findphysicalpath", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.findphysicalpath", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `List`1`
- **Safe to block?**: Yes
