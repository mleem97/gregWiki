---
title: CreateCellPool
description: Documentation for greg.SYSTEM.CreateCellPool
path: /api/hooks/system/createcellpool
---

# CreateCellPool

> **Hook ID:** `greg.SYSTEM.CreateCellPool`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/VerticalRecyclingSystem.CreateCellPool

## Native Signature
```csharp
Il2Cpp.VerticalRecyclingSystem::CreateCellPool()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateCellPool` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CreateCellPool", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CreateCellPool");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CreateCellPool", function(payload)
    greg.log("Hook greg.SYSTEM.CreateCellPool received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CreateCellPool fired")

greg.on("greg.SYSTEM.CreateCellPool", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CreateCellPool", (payload) => {
    console.log("Hook greg.SYSTEM.CreateCellPool triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CreateCellPool".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CreateCellPool", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CreateCellPool fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
