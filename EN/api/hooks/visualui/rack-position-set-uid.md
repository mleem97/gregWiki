---
title: RackPosition.SetUID
description: Hook event for RackPosition.SetUID
path: /api/hooks/visualui/rack-position-set-uid
---

# RackPosition.SetUID

> **Hook ID:** `greg.visualui.rackposition.setuid`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackPosition.SetUID()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetUID(Int32 uid)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `uid` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetUID` events in `RackPosition`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rackposition.setuid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rackposition.setuid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rackposition.setuid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rackposition.setuid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rackposition.setuid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rackposition.setuid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
