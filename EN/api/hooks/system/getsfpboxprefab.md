---
title: GetSfpBoxPrefab
description: Documentation for greg.SYSTEM.GetSfpBoxPrefab
path: /api/hooks/system/getsfpboxprefab
---

# GetSfpBoxPrefab

> **Hook ID:** `greg.SYSTEM.GetSfpBoxPrefab`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.GetSfpBoxPrefab

## Native Signature
```csharp
Il2Cpp.MainGameManager::GetSfpBoxPrefab(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSfpBoxPrefab` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetSfpBoxPrefab", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetSfpBoxPrefab");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetSfpBoxPrefab", function(payload)
    greg.log("Hook greg.SYSTEM.GetSfpBoxPrefab received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetSfpBoxPrefab fired")

greg.on("greg.SYSTEM.GetSfpBoxPrefab", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetSfpBoxPrefab", (payload) => {
    console.log("Hook greg.SYSTEM.GetSfpBoxPrefab triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetSfpBoxPrefab".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetSfpBoxPrefab", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetSfpBoxPrefab fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
