---
title: PacketSpawnerSystem.SpawnPacket
description: Hook event for PacketSpawnerSystem.SpawnPacket
path: /api/hooks/lifecycle/packet-spawner-system-spawn-packet
---

# PacketSpawnerSystem.SpawnPacket

> **Hook ID:** `greg.lifecycle.packetspawnersystem.spawnpacket`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PacketSpawnerSystem.SpawnPacket()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SpawnPacket(EntityCommandBuffer ecb, PacketSpawnerComponent spawner, Int32 spawnerIndex, Entity spawnerEntity, BlobArray`1& waypoints, Int32 packetType)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `ecb` | `EntityCommandBuffer` | ... |
| `spawner` | `PacketSpawnerComponent` | ... |
| `spawnerIndex` | `Int32` | ... |
| `spawnerEntity` | `Entity` | ... |
| `waypoints` | `BlobArray`1&` | ... |
| `packetType` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SpawnPacket` events in `PacketSpawnerSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.packetspawnersystem.spawnpacket", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.packetspawnersystem.spawnpacket", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.packetspawnersystem.spawnpacket")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.packetspawnersystem.spawnpacket", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.packetspawnersystem.spawnpacket", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.packetspawnersystem.spawnpacket", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
