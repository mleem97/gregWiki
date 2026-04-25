---
title: DllLoaded
description: Documentation for greg.SYSTEM.DllLoaded
path: /api/hooks/system/dllloaded
---

# DllLoaded

> **Hook ID:** `greg.SYSTEM.DllLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.LoadDll

## Native Signature
```csharp
Il2Cpp.ModLoader::LoadDll(string, DllEntry)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DllLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DllLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DllLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DllLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.DllLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DllLoaded fired")

greg.on("greg.SYSTEM.DllLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DllLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.DllLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DllLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DllLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DllLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
