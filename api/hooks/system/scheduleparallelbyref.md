---
title: ScheduleParallelByRef
description: Documentation for greg.SYSTEM.ScheduleParallelByRef
path: /api/hooks/system/scheduleparallelbyref
---

# ScheduleParallelByRef

> **Hook ID:** `greg.SYSTEM.ScheduleParallelByRef`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UpdatePacketsJob.ScheduleParallelByRef

## Native Signature
```csharp
Il2Cpp.UpdatePacketsJob::ScheduleParallelByRef(EntityQuery)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ScheduleParallelByRef` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ScheduleParallelByRef", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ScheduleParallelByRef");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ScheduleParallelByRef", function(payload)
    greg.log("Hook greg.SYSTEM.ScheduleParallelByRef received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ScheduleParallelByRef fired")

greg.on("greg.SYSTEM.ScheduleParallelByRef", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ScheduleParallelByRef", (payload) => {
    console.log("Hook greg.SYSTEM.ScheduleParallelByRef triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ScheduleParallelByRef".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ScheduleParallelByRef", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ScheduleParallelByRef fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
