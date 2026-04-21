---
title: SafelyDisposeSpawner
description: Documentation for greg.SYSTEM.SafelyDisposeSpawner
path: /api/hooks/system/safelydisposespawner
---

# SafelyDisposeSpawner

> **Hook ID:** `greg.SYSTEM.SafelyDisposeSpawner`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.SafelyDisposeSpawner

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::SafelyDisposeSpawner(Entity, int, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SafelyDisposeSpawner` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SafelyDisposeSpawner", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SafelyDisposeSpawner");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SafelyDisposeSpawner", function(payload)
    greg.log("Hook greg.SYSTEM.SafelyDisposeSpawner received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SafelyDisposeSpawner fired")

greg.on("greg.SYSTEM.SafelyDisposeSpawner", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SafelyDisposeSpawner", (payload) => {
    console.log("Hook greg.SYSTEM.SafelyDisposeSpawner triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SafelyDisposeSpawner".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SafelyDisposeSpawner", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SafelyDisposeSpawner fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
