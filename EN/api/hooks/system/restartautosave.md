---
title: RestartAutoSave
description: Documentation for greg.SYSTEM.RestartAutoSave
path: /api/hooks/system/restartautosave
---

# RestartAutoSave

> **Hook ID:** `greg.SYSTEM.RestartAutoSave`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.RestartAutoSave

## Native Signature
```csharp
Il2Cpp.MainGameManager::RestartAutoSave()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RestartAutoSave` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RestartAutoSave", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RestartAutoSave");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RestartAutoSave", function(payload)
    greg.log("Hook greg.SYSTEM.RestartAutoSave received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RestartAutoSave fired")

greg.on("greg.SYSTEM.RestartAutoSave", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RestartAutoSave", (payload) => {
    console.log("Hook greg.SYSTEM.RestartAutoSave triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RestartAutoSave".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RestartAutoSave", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RestartAutoSave fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
