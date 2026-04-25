---
title: GetAllCables
description: Documentation for greg.SYSTEM.GetAllCables
path: /api/hooks/system/getallcables
---

# GetAllCables

> **Hook ID:** `greg.SYSTEM.GetAllCables`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.GetAllCables

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::GetAllCables()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAllCables` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetAllCables", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetAllCables");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetAllCables", function(payload)
    greg.log("Hook greg.SYSTEM.GetAllCables received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetAllCables fired")

greg.on("greg.SYSTEM.GetAllCables", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetAllCables", (payload) => {
    console.log("Hook greg.SYSTEM.GetAllCables triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetAllCables".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetAllCables", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetAllCables fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
