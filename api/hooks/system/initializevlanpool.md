---
title: InitializeVlanPool
description: Documentation for greg.SYSTEM.InitializeVlanPool
path: /api/hooks/system/initializevlanpool
---

# InitializeVlanPool

> **Hook ID:** `greg.SYSTEM.InitializeVlanPool`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.InitializeVlanPool

## Native Signature
```csharp
Il2Cpp.MainGameManager::InitializeVlanPool()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InitializeVlanPool` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InitializeVlanPool", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InitializeVlanPool");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InitializeVlanPool", function(payload)
    greg.log("Hook greg.SYSTEM.InitializeVlanPool received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InitializeVlanPool fired")

greg.on("greg.SYSTEM.InitializeVlanPool", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InitializeVlanPool", (payload) => {
    console.log("Hook greg.SYSTEM.InitializeVlanPool triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InitializeVlanPool".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InitializeVlanPool", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InitializeVlanPool fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
