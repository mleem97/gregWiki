---
title: SplinePointSet
description: Documentation for greg.SYSTEM.SplinePointSet
path: /api/hooks/system/splinepointset
---

# SplinePointSet

> **Hook ID:** `greg.SYSTEM.SplinePointSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.SetSplinePoint

## Native Signature
```csharp
Il2Cpp.Rope::SetSplinePoint()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SplinePointSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SplinePointSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SplinePointSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SplinePointSet", function(payload)
    greg.log("Hook greg.SYSTEM.SplinePointSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SplinePointSet fired")

greg.on("greg.SYSTEM.SplinePointSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SplinePointSet", (payload) => {
    console.log("Hook greg.SYSTEM.SplinePointSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SplinePointSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SplinePointSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SplinePointSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
