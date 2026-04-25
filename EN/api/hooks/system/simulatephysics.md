---
title: SimulatePhysics
description: Documentation for greg.SYSTEM.SimulatePhysics
path: /api/hooks/system/simulatephysics
---

# SimulatePhysics

> **Hook ID:** `greg.SYSTEM.SimulatePhysics`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/RopeWindEffect.SimulatePhysics

## Native Signature
```csharp
Il2Cpp.RopeWindEffect::SimulatePhysics()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SimulatePhysics` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SimulatePhysics", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SimulatePhysics");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SimulatePhysics", function(payload)
    greg.log("Hook greg.SYSTEM.SimulatePhysics received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SimulatePhysics fired")

greg.on("greg.SYSTEM.SimulatePhysics", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SimulatePhysics", (payload) => {
    console.log("Hook greg.SYSTEM.SimulatePhysics triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SimulatePhysics".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SimulatePhysics", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SimulatePhysics fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
