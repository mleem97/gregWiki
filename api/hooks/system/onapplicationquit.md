---
title: OnApplicationQuit
description: Documentation for greg.SYSTEM.OnApplicationQuit
path: /api/hooks/system/onapplicationquit
---

# OnApplicationQuit

> **Hook ID:** `greg.SYSTEM.OnApplicationQuit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.OnApplicationQuit

## Native Signature
```csharp
Il2Cpp.MainGameManager::OnApplicationQuit()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnApplicationQuit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnApplicationQuit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnApplicationQuit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnApplicationQuit", function(payload)
    greg.log("Hook greg.SYSTEM.OnApplicationQuit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnApplicationQuit fired")

greg.on("greg.SYSTEM.OnApplicationQuit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnApplicationQuit", (payload) => {
    console.log("Hook greg.SYSTEM.OnApplicationQuit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnApplicationQuit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnApplicationQuit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnApplicationQuit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
