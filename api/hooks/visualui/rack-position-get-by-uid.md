---
title: RackPosition.GetByUID
description: Hook event for RackPosition.GetByUID
path: /api/hooks/visualui/rack-position-get-by-uid
---

# RackPosition.GetByUID

> **Hook ID:** `greg.visualui.rackposition.getbyuid`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackPosition.GetByUID()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
RackPosition GetByUID(Int32 uid)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `uid` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetByUID` events in `RackPosition`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rackposition.getbyuid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rackposition.getbyuid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rackposition.getbyuid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rackposition.getbyuid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rackposition.getbyuid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rackposition.getbyuid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `RackPosition`
- **Safe to block?**: Yes
