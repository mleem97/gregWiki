---
title: GetServerProcessingSpeed
description: Documentation for greg.SYSTEM.GetServerProcessingSpeed
path: /api/hooks/system/getserverprocessingspeed
---

# GetServerProcessingSpeed

> **Hook ID:** `greg.SYSTEM.GetServerProcessingSpeed`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.GetServerProcessingSpeed

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::GetServerProcessingSpeed(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetServerProcessingSpeed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetServerProcessingSpeed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetServerProcessingSpeed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetServerProcessingSpeed", function(payload)
    greg.log("Hook greg.SYSTEM.GetServerProcessingSpeed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetServerProcessingSpeed fired")

greg.on("greg.SYSTEM.GetServerProcessingSpeed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetServerProcessingSpeed", (payload) => {
    console.log("Hook greg.SYSTEM.GetServerProcessingSpeed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetServerProcessingSpeed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetServerProcessingSpeed", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetServerProcessingSpeed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
