---
title: ParentTheObjectWithDelay
description: Documentation for greg.SYSTEM.ParentTheObjectWithDelay
path: /api/hooks/system/parenttheobjectwithdelay
---

# ParentTheObjectWithDelay

> **Hook ID:** `greg.SYSTEM.ParentTheObjectWithDelay`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TrolleyLoadingBay.ParentTheObjectWithDelay

## Native Signature
```csharp
Il2Cpp.TrolleyLoadingBay::ParentTheObjectWithDelay(UsableObject)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ParentTheObjectWithDelay` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ParentTheObjectWithDelay", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ParentTheObjectWithDelay");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ParentTheObjectWithDelay", function(payload)
    greg.log("Hook greg.SYSTEM.ParentTheObjectWithDelay received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ParentTheObjectWithDelay fired")

greg.on("greg.SYSTEM.ParentTheObjectWithDelay", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ParentTheObjectWithDelay", (payload) => {
    console.log("Hook greg.SYSTEM.ParentTheObjectWithDelay triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ParentTheObjectWithDelay".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ParentTheObjectWithDelay", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ParentTheObjectWithDelay fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
