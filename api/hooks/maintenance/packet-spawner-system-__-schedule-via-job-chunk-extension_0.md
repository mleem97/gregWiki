---
title: PacketSpawnerSystem.__ScheduleViaJobChunkExtension_0
description: Hook event for PacketSpawnerSystem.__ScheduleViaJobChunkExtension_0
path: /api/hooks/maintenance/packet-spawner-system-__-schedule-via-job-chunk-extension_0
---

# PacketSpawnerSystem.__ScheduleViaJobChunkExtension_0

> **Hook ID:** `greg.maintenance.packetspawnersystem.__scheduleviajobchunkextension_0`
> **Category:** Maintenance
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PacketSpawnerSystem.__ScheduleViaJobChunkExtension_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
JobHandle __ScheduleViaJobChunkExtension_0(UpdatePacketsJob job, EntityQuery query, JobHandle dependency, SystemState& state, Boolean hasUserDefinedQuery)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `job` | `UpdatePacketsJob` | ... |
| `query` | `EntityQuery` | ... |
| `dependency` | `JobHandle` | ... |
| `state` | `SystemState&` | ... |
| `hasUserDefinedQuery` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `__ScheduleViaJobChunkExtension_0` events in `PacketSpawnerSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.maintenance.packetspawnersystem.__scheduleviajobchunkextension_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.maintenance.packetspawnersystem.__scheduleviajobchunkextension_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.maintenance.packetspawnersystem.__scheduleviajobchunkextension_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.maintenance.packetspawnersystem.__scheduleviajobchunkextension_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.maintenance.packetspawnersystem.__scheduleviajobchunkextension_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.maintenance.packetspawnersystem.__scheduleviajobchunkextension_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `JobHandle`
- **Safe to block?**: Yes
