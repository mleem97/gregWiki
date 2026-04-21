---
title: HandleLookAtRay
description: Documentation for greg.SYSTEM.HandleLookAtRay
path: /api/hooks/system/handlelookatray
---

# HandleLookAtRay

> **Hook ID:** `greg.SYSTEM.HandleLookAtRay`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/RayLookAt.HandleLookAtRay

## Native Signature
```csharp
Il2Cpp.RayLookAt::HandleLookAtRay(Transform)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HandleLookAtRay` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HandleLookAtRay", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HandleLookAtRay");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HandleLookAtRay", function(payload)
    greg.log("Hook greg.SYSTEM.HandleLookAtRay received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HandleLookAtRay fired")

greg.on("greg.SYSTEM.HandleLookAtRay", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HandleLookAtRay", (payload) => {
    console.log("Hook greg.SYSTEM.HandleLookAtRay triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HandleLookAtRay".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HandleLookAtRay", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HandleLookAtRay fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
