---
title: OnCreate
description: Documentation for greg.SYSTEM.OnCreate
path: /api/hooks/system/oncreate
---

# OnCreate

> **Hook ID:** `greg.SYSTEM.OnCreate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.OnCreate

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::OnCreate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnCreate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnCreate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnCreate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnCreate", function(payload)
    greg.log("Hook greg.SYSTEM.OnCreate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnCreate fired")

greg.on("greg.SYSTEM.OnCreate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnCreate", (payload) => {
    console.log("Hook greg.SYSTEM.OnCreate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnCreate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnCreate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnCreate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
