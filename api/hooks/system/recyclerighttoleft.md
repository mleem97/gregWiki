---
title: RecycleRightToleft
description: Documentation for greg.SYSTEM.RecycleRightToleft
path: /api/hooks/system/recyclerighttoleft
---

# RecycleRightToleft

> **Hook ID:** `greg.SYSTEM.RecycleRightToleft`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/HorizontalRecyclingSystem.RecycleRightToleft

## Native Signature
```csharp
Il2Cpp.HorizontalRecyclingSystem::RecycleRightToleft()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RecycleRightToleft` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RecycleRightToleft", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RecycleRightToleft");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RecycleRightToleft", function(payload)
    greg.log("Hook greg.SYSTEM.RecycleRightToleft received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RecycleRightToleft fired")

greg.on("greg.SYSTEM.RecycleRightToleft", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RecycleRightToleft", (payload) => {
    console.log("Hook greg.SYSTEM.RecycleRightToleft triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RecycleRightToleft".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RecycleRightToleft", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RecycleRightToleft fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
