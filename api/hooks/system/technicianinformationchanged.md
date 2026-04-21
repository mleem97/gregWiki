---
title: TechnicianInformationChanged
description: Documentation for greg.SYSTEM.TechnicianInformationChanged
path: /api/hooks/system/technicianinformationchanged
---

# TechnicianInformationChanged

> **Hook ID:** `greg.SYSTEM.TechnicianInformationChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.UpdateTechnicianInformation

## Native Signature
```csharp
Il2Cpp.AssetManagement::UpdateTechnicianInformation()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TechnicianInformationChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TechnicianInformationChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TechnicianInformationChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TechnicianInformationChanged", function(payload)
    greg.log("Hook greg.SYSTEM.TechnicianInformationChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TechnicianInformationChanged fired")

greg.on("greg.SYSTEM.TechnicianInformationChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TechnicianInformationChanged", (payload) => {
    console.log("Hook greg.SYSTEM.TechnicianInformationChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TechnicianInformationChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TechnicianInformationChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TechnicianInformationChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
