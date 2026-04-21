---
title: AllModsLoaded
description: Documentation for greg.SYSTEM.AllModsLoaded
path: /api/hooks/system/allmodsloaded
---

# AllModsLoaded

> **Hook ID:** `greg.SYSTEM.AllModsLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.LoadAllMods

## Native Signature
```csharp
Il2Cpp.ModLoader::LoadAllMods()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AllModsLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AllModsLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AllModsLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AllModsLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.AllModsLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AllModsLoaded fired")

greg.on("greg.SYSTEM.AllModsLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AllModsLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.AllModsLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AllModsLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AllModsLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AllModsLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
