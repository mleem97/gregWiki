---
title: InstantiateParticleUpgrade
description: Documentation for greg.SYSTEM.InstantiateParticleUpgrade
path: /api/hooks/system/instantiateparticleupgrade
---

# InstantiateParticleUpgrade

> **Hook ID:** `greg.SYSTEM.InstantiateParticleUpgrade`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.InstantiateParticleUpgrade

## Native Signature
```csharp
Il2Cpp.StaticUIElements::InstantiateParticleUpgrade(Transform)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InstantiateParticleUpgrade` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InstantiateParticleUpgrade", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InstantiateParticleUpgrade");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InstantiateParticleUpgrade", function(payload)
    greg.log("Hook greg.SYSTEM.InstantiateParticleUpgrade received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InstantiateParticleUpgrade fired")

greg.on("greg.SYSTEM.InstantiateParticleUpgrade", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InstantiateParticleUpgrade", (payload) => {
    console.log("Hook greg.SYSTEM.InstantiateParticleUpgrade triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InstantiateParticleUpgrade".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InstantiateParticleUpgrade", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InstantiateParticleUpgrade fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
