---
title: CellSet
description: Documentation for greg.SYSTEM.CellSet
path: /api/hooks/system/cellset
---

# CellSet

> **Hook ID:** `greg.SYSTEM.CellSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/IRecyclableScrollRectDataSource.SetCell

## Native Signature
```csharp
Il2Cpp.IRecyclableScrollRectDataSource::SetCell(ICell, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CellSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CellSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CellSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CellSet", function(payload)
    greg.log("Hook greg.SYSTEM.CellSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CellSet fired")

greg.on("greg.SYSTEM.CellSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CellSet", (payload) => {
    console.log("Hook greg.SYSTEM.CellSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CellSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CellSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CellSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
