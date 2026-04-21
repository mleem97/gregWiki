---
title: Run
description: Documentation for greg.SYSTEM.Run
path: /api/hooks/system/run
---

# Run

> **Hook ID:** `greg.SYSTEM.Run`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InternalCompilerQueryAndHandleData.Run

## Native Signature
```csharp
Il2Cpp.InternalCompilerQueryAndHandleData::Run(PacketSpawnerSystem.UpdatePacketsJob, EntityQuery)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Run` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Run", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Run");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Run", function(payload)
    greg.log("Hook greg.SYSTEM.Run received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Run fired")

greg.on("greg.SYSTEM.Run", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Run", (payload) => {
    console.log("Hook greg.SYSTEM.Run triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Run".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Run", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Run fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
