---
title: InitCoroutine
description: Documentation for greg.SYSTEM.InitCoroutine
path: /api/hooks/system/initcoroutine
---

# InitCoroutine

> **Hook ID:** `greg.SYSTEM.InitCoroutine`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/VerticalRecyclingSystem.InitCoroutine

## Native Signature
```csharp
Il2Cpp.VerticalRecyclingSystem::InitCoroutine(Il2CppSystem.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InitCoroutine` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InitCoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InitCoroutine");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InitCoroutine", function(payload)
    greg.log("Hook greg.SYSTEM.InitCoroutine received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InitCoroutine fired")

greg.on("greg.SYSTEM.InitCoroutine", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InitCoroutine", (payload) => {
    console.log("Hook greg.SYSTEM.InitCoroutine triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InitCoroutine".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InitCoroutine", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InitCoroutine fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
