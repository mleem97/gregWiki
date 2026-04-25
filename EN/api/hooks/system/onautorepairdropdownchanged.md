---
title: OnAutoRepairDropdownChanged
description: Documentation for greg.SYSTEM.OnAutoRepairDropdownChanged
path: /api/hooks/system/onautorepairdropdownchanged
---

# OnAutoRepairDropdownChanged

> **Hook ID:** `greg.SYSTEM.OnAutoRepairDropdownChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.OnAutoRepairDropdownChanged

## Native Signature
```csharp
Il2Cpp.AssetManagement::OnAutoRepairDropdownChanged(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnAutoRepairDropdownChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnAutoRepairDropdownChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnAutoRepairDropdownChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnAutoRepairDropdownChanged", function(payload)
    greg.log("Hook greg.SYSTEM.OnAutoRepairDropdownChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnAutoRepairDropdownChanged fired")

greg.on("greg.SYSTEM.OnAutoRepairDropdownChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnAutoRepairDropdownChanged", (payload) => {
    console.log("Hook greg.SYSTEM.OnAutoRepairDropdownChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnAutoRepairDropdownChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnAutoRepairDropdownChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnAutoRepairDropdownChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
