---
title: RecycleBottomToTop
description: Documentation for greg.SYSTEM.RecycleBottomToTop
path: /api/hooks/system/recyclebottomtotop
---

# RecycleBottomToTop

> **Hook ID:** `greg.SYSTEM.RecycleBottomToTop`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/VerticalRecyclingSystem.RecycleBottomToTop

## Native Signature
```csharp
Il2Cpp.VerticalRecyclingSystem::RecycleBottomToTop()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RecycleBottomToTop` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RecycleBottomToTop", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RecycleBottomToTop");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RecycleBottomToTop", function(payload)
    greg.log("Hook greg.SYSTEM.RecycleBottomToTop received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RecycleBottomToTop fired")

greg.on("greg.SYSTEM.RecycleBottomToTop", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RecycleBottomToTop", (payload) => {
    console.log("Hook greg.SYSTEM.RecycleBottomToTop triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RecycleBottomToTop".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RecycleBottomToTop", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RecycleBottomToTop fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
