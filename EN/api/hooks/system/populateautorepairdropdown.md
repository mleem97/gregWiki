---
title: PopulateAutoRepairDropdown
description: Documentation for greg.SYSTEM.PopulateAutoRepairDropdown
path: /api/hooks/system/populateautorepairdropdown
---

# PopulateAutoRepairDropdown

> **Hook ID:** `greg.SYSTEM.PopulateAutoRepairDropdown`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.PopulateAutoRepairDropdown

## Native Signature
```csharp
Il2Cpp.AssetManagement::PopulateAutoRepairDropdown()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PopulateAutoRepairDropdown` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PopulateAutoRepairDropdown", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PopulateAutoRepairDropdown");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PopulateAutoRepairDropdown", function(payload)
    greg.log("Hook greg.SYSTEM.PopulateAutoRepairDropdown received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PopulateAutoRepairDropdown fired")

greg.on("greg.SYSTEM.PopulateAutoRepairDropdown", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PopulateAutoRepairDropdown", (payload) => {
    console.log("Hook greg.SYSTEM.PopulateAutoRepairDropdown triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PopulateAutoRepairDropdown".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PopulateAutoRepairDropdown", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PopulateAutoRepairDropdown fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
