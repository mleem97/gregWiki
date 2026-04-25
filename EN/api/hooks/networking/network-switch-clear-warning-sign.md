---
title: NetworkSwitch.ClearWarningSign
description: Hook event for NetworkSwitch.ClearWarningSign
path: /api/hooks/networking/network-switch-clear-warning-sign
---

# NetworkSwitch.ClearWarningSign

> **Hook ID:** `greg.networking.networkswitch.clearwarningsign`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.ClearWarningSign()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ClearWarningSign(Boolean isPreserved)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `isPreserved` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `ClearWarningSign` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitch.clearwarningsign", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitch.clearwarningsign", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitch.clearwarningsign")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitch.clearwarningsign", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitch.clearwarningsign", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitch.clearwarningsign", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
