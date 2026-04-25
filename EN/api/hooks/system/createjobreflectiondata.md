---
title: CreateJobReflectionData
description: Documentation for greg.SYSTEM.CreateJobReflectionData
path: /api/hooks/system/createjobreflectiondata
---

# CreateJobReflectionData

> **Hook ID:** `greg.SYSTEM.CreateJobReflectionData`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/__JobReflectionRegistrationOutput__1221673671587648887.CreateJobReflectionData

## Native Signature
```csharp
Il2Cpp.__JobReflectionRegistrationOutput__1221673671587648887::CreateJobReflectionData()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateJobReflectionData` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CreateJobReflectionData", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CreateJobReflectionData");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CreateJobReflectionData", function(payload)
    greg.log("Hook greg.SYSTEM.CreateJobReflectionData received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CreateJobReflectionData fired")

greg.on("greg.SYSTEM.CreateJobReflectionData", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CreateJobReflectionData", (payload) => {
    console.log("Hook greg.SYSTEM.CreateJobReflectionData triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CreateJobReflectionData".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CreateJobReflectionData", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CreateJobReflectionData fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
