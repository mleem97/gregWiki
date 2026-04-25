---
title: Cleanup
description: Documentation for greg.SYSTEM.Cleanup
path: /api/hooks/system/cleanup
---

# Cleanup

> **Hook ID:** `greg.SYSTEM.Cleanup`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/RayLookAt.Cleanup

## Native Signature
```csharp
Il2Cpp.RayLookAt::Cleanup()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Cleanup` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Cleanup", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Cleanup");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Cleanup", function(payload)
    greg.log("Hook greg.SYSTEM.Cleanup received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Cleanup fired")

greg.on("greg.SYSTEM.Cleanup", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Cleanup", (payload) => {
    console.log("Hook greg.SYSTEM.Cleanup triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Cleanup".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Cleanup", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Cleanup fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
