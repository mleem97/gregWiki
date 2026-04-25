---
title: RecyclingBoundsSet
description: Documentation for greg.SYSTEM.RecyclingBoundsSet
path: /api/hooks/system/recyclingboundsset
---

# RecyclingBoundsSet

> **Hook ID:** `greg.SYSTEM.RecyclingBoundsSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/VerticalRecyclingSystem.SetRecyclingBounds

## Native Signature
```csharp
Il2Cpp.VerticalRecyclingSystem::SetRecyclingBounds()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RecyclingBoundsSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RecyclingBoundsSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RecyclingBoundsSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RecyclingBoundsSet", function(payload)
    greg.log("Hook greg.SYSTEM.RecyclingBoundsSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RecyclingBoundsSet fired")

greg.on("greg.SYSTEM.RecyclingBoundsSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RecyclingBoundsSet", (payload) => {
    console.log("Hook greg.SYSTEM.RecyclingBoundsSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RecyclingBoundsSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RecyclingBoundsSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RecyclingBoundsSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
