---
title: GetSwitchPrefab
description: Documentation for greg.SYSTEM.GetSwitchPrefab
path: /api/hooks/system/getswitchprefab
---

# GetSwitchPrefab

> **Hook ID:** `greg.SYSTEM.GetSwitchPrefab`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.GetSwitchPrefab

## Native Signature
```csharp
Il2Cpp.MainGameManager::GetSwitchPrefab(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSwitchPrefab` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetSwitchPrefab", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetSwitchPrefab");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetSwitchPrefab", function(payload)
    greg.log("Hook greg.SYSTEM.GetSwitchPrefab received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetSwitchPrefab fired")

greg.on("greg.SYSTEM.GetSwitchPrefab", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetSwitchPrefab", (payload) => {
    console.log("Hook greg.SYSTEM.GetSwitchPrefab triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetSwitchPrefab".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetSwitchPrefab", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetSwitchPrefab fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
