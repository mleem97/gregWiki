---
title: GetItemCount
description: Documentation for greg.SYSTEM.GetItemCount
path: /api/hooks/system/getitemcount
---

# GetItemCount

> **Hook ID:** `greg.SYSTEM.GetItemCount`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/IRecyclableScrollRectDataSource.GetItemCount

## Native Signature
```csharp
Il2Cpp.IRecyclableScrollRectDataSource::GetItemCount()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetItemCount` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetItemCount", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetItemCount");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetItemCount", function(payload)
    greg.log("Hook greg.SYSTEM.GetItemCount received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetItemCount fired")

greg.on("greg.SYSTEM.GetItemCount", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetItemCount", (payload) => {
    console.log("Hook greg.SYSTEM.GetItemCount triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetItemCount".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetItemCount", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetItemCount fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
