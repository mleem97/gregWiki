---
title: ButtonAssetManagementScreen
description: Documentation for greg.SYSTEM.ButtonAssetManagementScreen
path: /api/hooks/system/buttonassetmanagementscreen
---

# ButtonAssetManagementScreen

> **Hook ID:** `greg.SYSTEM.ButtonAssetManagementScreen`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonAssetManagementScreen

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonAssetManagementScreen()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonAssetManagementScreen` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonAssetManagementScreen", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonAssetManagementScreen");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonAssetManagementScreen", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonAssetManagementScreen received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonAssetManagementScreen fired")

greg.on("greg.SYSTEM.ButtonAssetManagementScreen", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonAssetManagementScreen", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonAssetManagementScreen triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonAssetManagementScreen".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonAssetManagementScreen", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonAssetManagementScreen fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
