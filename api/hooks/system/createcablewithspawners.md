---
title: CreateCableWithSpawners
description: Documentation for greg.SYSTEM.CreateCableWithSpawners
path: /api/hooks/system/createcablewithspawners
---

# CreateCableWithSpawners

> **Hook ID:** `greg.SYSTEM.CreateCableWithSpawners`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.CreateCableWithSpawners

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::CreateCableWithSpawners(int, List<Vector3>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateCableWithSpawners` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CreateCableWithSpawners", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CreateCableWithSpawners");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CreateCableWithSpawners", function(payload)
    greg.log("Hook greg.SYSTEM.CreateCableWithSpawners received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CreateCableWithSpawners fired")

greg.on("greg.SYSTEM.CreateCableWithSpawners", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CreateCableWithSpawners", (payload) => {
    console.log("Hook greg.SYSTEM.CreateCableWithSpawners triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CreateCableWithSpawners".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CreateCableWithSpawners", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CreateCableWithSpawners fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
