---
title: ScheduleParallel
description: Documentation for greg.SYSTEM.ScheduleParallel
path: /api/hooks/system/scheduleparallel
---

# ScheduleParallel

> **Hook ID:** `greg.SYSTEM.ScheduleParallel`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UpdatePacketsJob.ScheduleParallel

## Native Signature
```csharp
Il2Cpp.UpdatePacketsJob::ScheduleParallel(EntityQuery)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ScheduleParallel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ScheduleParallel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ScheduleParallel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ScheduleParallel", function(payload)
    greg.log("Hook greg.SYSTEM.ScheduleParallel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ScheduleParallel fired")

greg.on("greg.SYSTEM.ScheduleParallel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ScheduleParallel", (payload) => {
    console.log("Hook greg.SYSTEM.ScheduleParallel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ScheduleParallel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ScheduleParallel", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ScheduleParallel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
