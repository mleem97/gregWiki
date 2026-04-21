---
title: OnUpdate
description: Documentation for greg.SYSTEM.OnUpdate
path: /api/hooks/system/onupdate
---

# OnUpdate

> **Hook ID:** `greg.SYSTEM.OnUpdate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.OnUpdate

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::OnUpdate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnUpdate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnUpdate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnUpdate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnUpdate", function(payload)
    greg.log("Hook greg.SYSTEM.OnUpdate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnUpdate fired")

greg.on("greg.SYSTEM.OnUpdate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnUpdate", (payload) => {
    console.log("Hook greg.SYSTEM.OnUpdate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnUpdate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnUpdate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnUpdate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
