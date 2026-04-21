---
title: AutoSaveEnabledSet
description: Documentation for greg.SYSTEM.AutoSaveEnabledSet
path: /api/hooks/system/autosaveenabledset
---

# AutoSaveEnabledSet

> **Hook ID:** `greg.SYSTEM.AutoSaveEnabledSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.SetAutoSaveEnabled

## Native Signature
```csharp
Il2Cpp.MainGameManager::SetAutoSaveEnabled(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoSaveEnabledSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AutoSaveEnabledSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AutoSaveEnabledSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AutoSaveEnabledSet", function(payload)
    greg.log("Hook greg.SYSTEM.AutoSaveEnabledSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AutoSaveEnabledSet fired")

greg.on("greg.SYSTEM.AutoSaveEnabledSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AutoSaveEnabledSet", (payload) => {
    console.log("Hook greg.SYSTEM.AutoSaveEnabledSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AutoSaveEnabledSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AutoSaveEnabledSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AutoSaveEnabledSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
