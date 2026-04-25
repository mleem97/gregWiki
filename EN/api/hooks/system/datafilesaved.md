---
title: DataFileSaved
description: Documentation for greg.SYSTEM.DataFileSaved
path: /api/hooks/system/datafilesaved
---

# DataFileSaved

> **Hook ID:** `greg.SYSTEM.DataFileSaved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FCP_Persistence.SaveDataFile

## Native Signature
```csharp
Il2Cpp.FCP_Persistence::SaveDataFile()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DataFileSaved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DataFileSaved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DataFileSaved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DataFileSaved", function(payload)
    greg.log("Hook greg.SYSTEM.DataFileSaved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DataFileSaved fired")

greg.on("greg.SYSTEM.DataFileSaved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DataFileSaved", (payload) => {
    console.log("Hook greg.SYSTEM.DataFileSaved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DataFileSaved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DataFileSaved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DataFileSaved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
