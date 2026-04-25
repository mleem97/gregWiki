---
title: GetPatchPanelPrefab
description: Documentation for greg.SYSTEM.GetPatchPanelPrefab
path: /api/hooks/system/getpatchpanelprefab
---

# GetPatchPanelPrefab

> **Hook ID:** `greg.SYSTEM.GetPatchPanelPrefab`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.GetPatchPanelPrefab

## Native Signature
```csharp
Il2Cpp.MainGameManager::GetPatchPanelPrefab(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetPatchPanelPrefab` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetPatchPanelPrefab", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetPatchPanelPrefab");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetPatchPanelPrefab", function(payload)
    greg.log("Hook greg.SYSTEM.GetPatchPanelPrefab received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetPatchPanelPrefab fired")

greg.on("greg.SYSTEM.GetPatchPanelPrefab", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetPatchPanelPrefab", (payload) => {
    console.log("Hook greg.SYSTEM.GetPatchPanelPrefab triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetPatchPanelPrefab".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetPatchPanelPrefab", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetPatchPanelPrefab fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
