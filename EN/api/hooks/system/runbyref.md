---
title: RunByRef
description: Documentation for greg.SYSTEM.RunByRef
path: /api/hooks/system/runbyref
---

# RunByRef

> **Hook ID:** `greg.SYSTEM.RunByRef`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UpdatePacketsJob.RunByRef

## Native Signature
```csharp
Il2Cpp.UpdatePacketsJob::RunByRef(EntityQuery)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RunByRef` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RunByRef", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RunByRef");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RunByRef", function(payload)
    greg.log("Hook greg.SYSTEM.RunByRef received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RunByRef fired")

greg.on("greg.SYSTEM.RunByRef", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RunByRef", (payload) => {
    console.log("Hook greg.SYSTEM.RunByRef triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RunByRef".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RunByRef", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RunByRef fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
