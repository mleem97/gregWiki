---
title: PacketSpawnerEnabledSet
description: Documentation for greg.SYSTEM.PacketSpawnerEnabledSet
path: /api/hooks/system/packetspawnerenabledset
---

# PacketSpawnerEnabledSet

> **Hook ID:** `greg.SYSTEM.PacketSpawnerEnabledSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.SetPacketSpawnerEnabled

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::SetPacketSpawnerEnabled(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PacketSpawnerEnabledSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PacketSpawnerEnabledSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PacketSpawnerEnabledSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PacketSpawnerEnabledSet", function(payload)
    greg.log("Hook greg.SYSTEM.PacketSpawnerEnabledSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PacketSpawnerEnabledSet fired")

greg.on("greg.SYSTEM.PacketSpawnerEnabledSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PacketSpawnerEnabledSet", (payload) => {
    console.log("Hook greg.SYSTEM.PacketSpawnerEnabledSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PacketSpawnerEnabledSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PacketSpawnerEnabledSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PacketSpawnerEnabledSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
