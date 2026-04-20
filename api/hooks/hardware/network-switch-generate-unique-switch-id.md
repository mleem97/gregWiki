---
title: NetworkSwitch.GenerateUniqueSwitchId
description: Hook event for NetworkSwitch.GenerateUniqueSwitchId
path: /api/hooks/hardware/network-switch-generate-unique-switch-id
---

# NetworkSwitch.GenerateUniqueSwitchId

> **Hook ID:** `greg.hardware.networkswitch.generateuniqueswitchid`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.GenerateUniqueSwitchId()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GenerateUniqueSwitchId()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GenerateUniqueSwitchId` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.networkswitch.generateuniqueswitchid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.networkswitch.generateuniqueswitchid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.networkswitch.generateuniqueswitchid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.networkswitch.generateuniqueswitchid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.networkswitch.generateuniqueswitchid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.networkswitch.generateuniqueswitchid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
