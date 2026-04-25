---
title: upLineSet
description: Documentation for greg.SYSTEM.upLineSet
path: /api/hooks/system/uplineset
---

# upLineSet

> **Hook ID:** `greg.SYSTEM.upLineSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagementDeviceLine.SetupLine

## Native Signature
```csharp
Il2Cpp.AssetManagementDeviceLine::SetupLine(AssetManagementDeviceLineData, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `upLineSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.upLineSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.upLineSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.upLineSet", function(payload)
    greg.log("Hook greg.SYSTEM.upLineSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.upLineSet fired")

greg.on("greg.SYSTEM.upLineSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.upLineSet", (payload) => {
    console.log("Hook greg.SYSTEM.upLineSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.upLineSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.upLineSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.upLineSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
