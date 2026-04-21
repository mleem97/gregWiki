---
title: OperatorsForSingleLevelSpawned
description: Documentation for greg.SYSTEM.OperatorsForSingleLevelSpawned
path: /api/hooks/system/operatorsforsinglelevelspawned
---

# OperatorsForSingleLevelSpawned

> **Hook ID:** `greg.SYSTEM.OperatorsForSingleLevelSpawned`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CommandCenter.SpawnOperatorsForSingleLevel

## Native Signature
```csharp
Il2Cpp.CommandCenter::SpawnOperatorsForSingleLevel(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OperatorsForSingleLevelSpawned` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OperatorsForSingleLevelSpawned", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OperatorsForSingleLevelSpawned");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OperatorsForSingleLevelSpawned", function(payload)
    greg.log("Hook greg.SYSTEM.OperatorsForSingleLevelSpawned received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OperatorsForSingleLevelSpawned fired")

greg.on("greg.SYSTEM.OperatorsForSingleLevelSpawned", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OperatorsForSingleLevelSpawned", (payload) => {
    console.log("Hook greg.SYSTEM.OperatorsForSingleLevelSpawned triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OperatorsForSingleLevelSpawned".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OperatorsForSingleLevelSpawned", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OperatorsForSingleLevelSpawned fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
