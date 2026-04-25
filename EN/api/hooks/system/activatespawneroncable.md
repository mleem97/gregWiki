---
title: ActivateSpawnerOnCable
description: Documentation for greg.SYSTEM.ActivateSpawnerOnCable
path: /api/hooks/system/activatespawneroncable
---

# ActivateSpawnerOnCable

> **Hook ID:** `greg.SYSTEM.ActivateSpawnerOnCable`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.ActivateSpawnerOnCable

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::ActivateSpawnerOnCable(Entity, float, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ActivateSpawnerOnCable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ActivateSpawnerOnCable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ActivateSpawnerOnCable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ActivateSpawnerOnCable", function(payload)
    greg.log("Hook greg.SYSTEM.ActivateSpawnerOnCable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ActivateSpawnerOnCable fired")

greg.on("greg.SYSTEM.ActivateSpawnerOnCable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ActivateSpawnerOnCable", (payload) => {
    console.log("Hook greg.SYSTEM.ActivateSpawnerOnCable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ActivateSpawnerOnCable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ActivateSpawnerOnCable", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ActivateSpawnerOnCable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
