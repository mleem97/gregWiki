---
title: AutoSaveIntervalSet
description: Documentation for greg.SYSTEM.AutoSaveIntervalSet
path: /api/hooks/system/autosaveintervalset
---

# AutoSaveIntervalSet

> **Hook ID:** `greg.SYSTEM.AutoSaveIntervalSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.SetAutoSaveInterval

## Native Signature
```csharp
Il2Cpp.MainGameManager::SetAutoSaveInterval(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoSaveIntervalSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AutoSaveIntervalSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AutoSaveIntervalSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AutoSaveIntervalSet", function(payload)
    greg.log("Hook greg.SYSTEM.AutoSaveIntervalSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AutoSaveIntervalSet fired")

greg.on("greg.SYSTEM.AutoSaveIntervalSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AutoSaveIntervalSet", (payload) => {
    console.log("Hook greg.SYSTEM.AutoSaveIntervalSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AutoSaveIntervalSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AutoSaveIntervalSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AutoSaveIntervalSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
