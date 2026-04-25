---
title: CleanUpSystem
description: Documentation for greg.SYSTEM.CleanUpSystem
path: /api/hooks/system/cleanupsystem
---

# CleanUpSystem

> **Hook ID:** `greg.SYSTEM.CleanUpSystem`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.CleanUpSystem

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::CleanUpSystem()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CleanUpSystem` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CleanUpSystem", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CleanUpSystem");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CleanUpSystem", function(payload)
    greg.log("Hook greg.SYSTEM.CleanUpSystem received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CleanUpSystem fired")

greg.on("greg.SYSTEM.CleanUpSystem", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CleanUpSystem", (payload) => {
    console.log("Hook greg.SYSTEM.CleanUpSystem triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CleanUpSystem".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CleanUpSystem", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CleanUpSystem fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
