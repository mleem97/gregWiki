---
title: GetServerPrefab
description: Documentation for greg.SYSTEM.GetServerPrefab
path: /api/hooks/system/getserverprefab
---

# GetServerPrefab

> **Hook ID:** `greg.SYSTEM.GetServerPrefab`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.GetServerPrefab

## Native Signature
```csharp
Il2Cpp.MainGameManager::GetServerPrefab(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetServerPrefab` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetServerPrefab", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetServerPrefab");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetServerPrefab", function(payload)
    greg.log("Hook greg.SYSTEM.GetServerPrefab received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetServerPrefab fired")

greg.on("greg.SYSTEM.GetServerPrefab", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetServerPrefab", (payload) => {
    console.log("Hook greg.SYSTEM.GetServerPrefab triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetServerPrefab".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetServerPrefab", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetServerPrefab fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
