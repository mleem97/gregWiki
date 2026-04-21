---
title: OnCreateForCompiler
description: Documentation for greg.SYSTEM.OnCreateForCompiler
path: /api/hooks/system/oncreateforcompiler
---

# OnCreateForCompiler

> **Hook ID:** `greg.SYSTEM.OnCreateForCompiler`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.OnCreateForCompiler

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::OnCreateForCompiler()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnCreateForCompiler` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnCreateForCompiler", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnCreateForCompiler");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnCreateForCompiler", function(payload)
    greg.log("Hook greg.SYSTEM.OnCreateForCompiler received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnCreateForCompiler fired")

greg.on("greg.SYSTEM.OnCreateForCompiler", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnCreateForCompiler", (payload) => {
    console.log("Hook greg.SYSTEM.OnCreateForCompiler triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnCreateForCompiler".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnCreateForCompiler", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnCreateForCompiler fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
