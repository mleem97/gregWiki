---
title: PacketSpawnerSystem.__codegen__OnCreate
description: Hook event for PacketSpawnerSystem.__codegen__OnCreate
path: /api/hooks/networking/packet-spawner-system-__codegen__-on-create
---

# PacketSpawnerSystem.__codegen__OnCreate

> **Hook ID:** `greg.networking.packetspawnersystem.__codegen__oncreate`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PacketSpawnerSystem.__codegen__OnCreate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void __codegen__OnCreate(IntPtr self, IntPtr state)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `self` | `IntPtr` | ... |
| `state` | `IntPtr` | ... |


## Using this Hook

::: tip
Use this hook to react to `__codegen__OnCreate` events in `PacketSpawnerSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.packetspawnersystem.__codegen__oncreate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.packetspawnersystem.__codegen__oncreate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.packetspawnersystem.__codegen__oncreate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.packetspawnersystem.__codegen__oncreate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.packetspawnersystem.__codegen__oncreate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.packetspawnersystem.__codegen__oncreate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
