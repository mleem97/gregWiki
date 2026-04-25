---
title: StartPointSet
description: Documentation for greg.SYSTEM.StartPointSet
path: /api/hooks/system/startpointset
---

# StartPointSet

> **Hook ID:** `greg.SYSTEM.StartPointSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.SetStartPoint

## Native Signature
```csharp
Il2Cpp.Rope::SetStartPoint(Transform, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StartPointSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.StartPointSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.StartPointSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.StartPointSet", function(payload)
    greg.log("Hook greg.SYSTEM.StartPointSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.StartPointSet fired")

greg.on("greg.SYSTEM.StartPointSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.StartPointSet", (payload) => {
    console.log("Hook greg.SYSTEM.StartPointSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.StartPointSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.StartPointSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.StartPointSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
