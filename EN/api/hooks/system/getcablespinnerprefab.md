---
title: GetCableSpinnerPrefab
description: Documentation for greg.SYSTEM.GetCableSpinnerPrefab
path: /api/hooks/system/getcablespinnerprefab
---

# GetCableSpinnerPrefab

> **Hook ID:** `greg.SYSTEM.GetCableSpinnerPrefab`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.GetCableSpinnerPrefab

## Native Signature
```csharp
Il2Cpp.MainGameManager::GetCableSpinnerPrefab(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCableSpinnerPrefab` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetCableSpinnerPrefab", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetCableSpinnerPrefab");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetCableSpinnerPrefab", function(payload)
    greg.log("Hook greg.SYSTEM.GetCableSpinnerPrefab received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetCableSpinnerPrefab fired")

greg.on("greg.SYSTEM.GetCableSpinnerPrefab", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetCableSpinnerPrefab", (payload) => {
    console.log("Hook greg.SYSTEM.GetCableSpinnerPrefab triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetCableSpinnerPrefab".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetCableSpinnerPrefab", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetCableSpinnerPrefab fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
