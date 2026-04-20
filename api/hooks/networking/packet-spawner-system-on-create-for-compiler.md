---
title: PacketSpawnerSystem.OnCreateForCompiler
description: Hook event for PacketSpawnerSystem.OnCreateForCompiler
path: /api/hooks/networking/packet-spawner-system-on-create-for-compiler
---

# PacketSpawnerSystem.OnCreateForCompiler

> **Hook ID:** `greg.networking.packetspawnersystem.oncreateforcompiler`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PacketSpawnerSystem.OnCreateForCompiler()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnCreateForCompiler(SystemState& state)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `state` | `SystemState&` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnCreateForCompiler` events in `PacketSpawnerSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.packetspawnersystem.oncreateforcompiler", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.packetspawnersystem.oncreateforcompiler", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.packetspawnersystem.oncreateforcompiler")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.packetspawnersystem.oncreateforcompiler", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.packetspawnersystem.oncreateforcompiler", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.packetspawnersystem.oncreateforcompiler", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
