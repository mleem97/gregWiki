---
title: AutoRepairModeSet
description: Documentation for greg.SYSTEM.AutoRepairModeSet
path: /api/hooks/system/autorepairmodeset
---

# AutoRepairModeSet

> **Hook ID:** `greg.SYSTEM.AutoRepairModeSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CommandCenter.SetAutoRepairMode

## Native Signature
```csharp
Il2Cpp.CommandCenter::SetAutoRepairMode(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoRepairModeSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AutoRepairModeSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AutoRepairModeSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AutoRepairModeSet", function(payload)
    greg.log("Hook greg.SYSTEM.AutoRepairModeSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AutoRepairModeSet fired")

greg.on("greg.SYSTEM.AutoRepairModeSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AutoRepairModeSet", (payload) => {
    console.log("Hook greg.SYSTEM.AutoRepairModeSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AutoRepairModeSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AutoRepairModeSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AutoRepairModeSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
