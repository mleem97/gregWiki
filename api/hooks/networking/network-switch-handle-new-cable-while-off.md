---
title: NetworkSwitch.HandleNewCableWhileOff
description: Hook event for NetworkSwitch.HandleNewCableWhileOff
path: /api/hooks/networking/network-switch-handle-new-cable-while-off
---

# NetworkSwitch.HandleNewCableWhileOff

> **Hook ID:** `greg.networking.networkswitch.handlenewcablewhileoff`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.HandleNewCableWhileOff()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void HandleNewCableWhileOff(Int32 cableId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `HandleNewCableWhileOff` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitch.handlenewcablewhileoff", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitch.handlenewcablewhileoff", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitch.handlenewcablewhileoff")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitch.handlenewcablewhileoff", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitch.handlenewcablewhileoff", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitch.handlenewcablewhileoff", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
