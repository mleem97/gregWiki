---
title: GetAppLogo
description: Documentation for greg.SYSTEM.GetAppLogo
path: /api/hooks/system/getapplogo
---

# GetAppLogo

> **Hook ID:** `greg.SYSTEM.GetAppLogo`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.GetAppLogo

## Native Signature
```csharp
Il2Cpp.MainGameManager::GetAppLogo(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAppLogo` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetAppLogo", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetAppLogo");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetAppLogo", function(payload)
    greg.log("Hook greg.SYSTEM.GetAppLogo received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetAppLogo fired")

greg.on("greg.SYSTEM.GetAppLogo", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetAppLogo", (payload) => {
    console.log("Hook greg.SYSTEM.GetAppLogo triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetAppLogo".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetAppLogo", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetAppLogo fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
