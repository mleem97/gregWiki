---
title: OnDrawGizmos
description: Documentation for greg.SYSTEM.OnDrawGizmos
path: /api/hooks/system/ondrawgizmos
---

# OnDrawGizmos

> **Hook ID:** `greg.SYSTEM.OnDrawGizmos`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/VerticalRecyclingSystem.OnDrawGizmos

## Native Signature
```csharp
Il2Cpp.VerticalRecyclingSystem::OnDrawGizmos()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDrawGizmos` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnDrawGizmos", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnDrawGizmos");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnDrawGizmos", function(payload)
    greg.log("Hook greg.SYSTEM.OnDrawGizmos received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnDrawGizmos fired")

greg.on("greg.SYSTEM.OnDrawGizmos", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnDrawGizmos", (payload) => {
    console.log("Hook greg.SYSTEM.OnDrawGizmos triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnDrawGizmos".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnDrawGizmos", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnDrawGizmos fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
