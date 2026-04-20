---
title: Server.SetPowerLightMaterial
description: Hook event for Server.SetPowerLightMaterial
path: /api/hooks/hardware/server-set-power-light-material
---

# Server.SetPowerLightMaterial

> **Hook ID:** `greg.hardware.server.setpowerlightmaterial`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.SetPowerLightMaterial()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetPowerLightMaterial(Material material)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `material` | `Material` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetPowerLightMaterial` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.server.setpowerlightmaterial", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.server.setpowerlightmaterial", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.server.setpowerlightmaterial")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.server.setpowerlightmaterial", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.server.setpowerlightmaterial", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.server.setpowerlightmaterial", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
