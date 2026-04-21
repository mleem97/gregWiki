---
title: AutoSaveCoroutine
description: Documentation for greg.SYSTEM.AutoSaveCoroutine
path: /api/hooks/system/autosavecoroutine
---

# AutoSaveCoroutine

> **Hook ID:** `greg.SYSTEM.AutoSaveCoroutine`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.AutoSaveCoroutine

## Native Signature
```csharp
Il2Cpp.MainGameManager::AutoSaveCoroutine()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoSaveCoroutine` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AutoSaveCoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AutoSaveCoroutine");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AutoSaveCoroutine", function(payload)
    greg.log("Hook greg.SYSTEM.AutoSaveCoroutine received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AutoSaveCoroutine fired")

greg.on("greg.SYSTEM.AutoSaveCoroutine", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AutoSaveCoroutine", (payload) => {
    console.log("Hook greg.SYSTEM.AutoSaveCoroutine triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AutoSaveCoroutine".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AutoSaveCoroutine", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AutoSaveCoroutine fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
