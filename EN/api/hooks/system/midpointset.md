---
title: MidPointSet
description: Documentation for greg.SYSTEM.MidPointSet
path: /api/hooks/system/midpointset
---

# MidPointSet

> **Hook ID:** `greg.SYSTEM.MidPointSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.SetMidPoint

## Native Signature
```csharp
Il2Cpp.Rope::SetMidPoint(Transform, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MidPointSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MidPointSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MidPointSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MidPointSet", function(payload)
    greg.log("Hook greg.SYSTEM.MidPointSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MidPointSet fired")

greg.on("greg.SYSTEM.MidPointSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MidPointSet", (payload) => {
    console.log("Hook greg.SYSTEM.MidPointSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MidPointSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MidPointSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MidPointSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
