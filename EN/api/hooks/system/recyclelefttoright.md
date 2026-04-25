---
title: RecycleLeftToRight
description: Documentation for greg.SYSTEM.RecycleLeftToRight
path: /api/hooks/system/recyclelefttoright
---

# RecycleLeftToRight

> **Hook ID:** `greg.SYSTEM.RecycleLeftToRight`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/HorizontalRecyclingSystem.RecycleLeftToRight

## Native Signature
```csharp
Il2Cpp.HorizontalRecyclingSystem::RecycleLeftToRight()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RecycleLeftToRight` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RecycleLeftToRight", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RecycleLeftToRight");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RecycleLeftToRight", function(payload)
    greg.log("Hook greg.SYSTEM.RecycleLeftToRight received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RecycleLeftToRight fired")

greg.on("greg.SYSTEM.RecycleLeftToRight", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RecycleLeftToRight", (payload) => {
    console.log("Hook greg.SYSTEM.RecycleLeftToRight triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RecycleLeftToRight".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RecycleLeftToRight", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RecycleLeftToRight fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
