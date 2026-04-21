---
title: ReloadData
description: Documentation for greg.SYSTEM.ReloadData
path: /api/hooks/system/reloaddata
---

# ReloadData

> **Hook ID:** `greg.SYSTEM.ReloadData`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/RecyclableScrollRect.ReloadData

## Native Signature
```csharp
Il2Cpp.RecyclableScrollRect::ReloadData(IRecyclableScrollRectDataSource)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReloadData` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ReloadData", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ReloadData");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ReloadData", function(payload)
    greg.log("Hook greg.SYSTEM.ReloadData received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ReloadData fired")

greg.on("greg.SYSTEM.ReloadData", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ReloadData", (payload) => {
    console.log("Hook greg.SYSTEM.ReloadData triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ReloadData".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ReloadData", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ReloadData fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
