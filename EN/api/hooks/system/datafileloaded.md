---
title: DataFileLoaded
description: Documentation for greg.SYSTEM.DataFileLoaded
path: /api/hooks/system/datafileloaded
---

# DataFileLoaded

> **Hook ID:** `greg.SYSTEM.DataFileLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FCP_Persistence.LoadDataFile

## Native Signature
```csharp
Il2Cpp.FCP_Persistence::LoadDataFile()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DataFileLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DataFileLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DataFileLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DataFileLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.DataFileLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DataFileLoaded fired")

greg.on("greg.SYSTEM.DataFileLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DataFileLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.DataFileLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DataFileLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DataFileLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DataFileLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
