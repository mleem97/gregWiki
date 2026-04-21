---
title: GenerateUniquePatchPanelId
description: Documentation for greg.SYSTEM.GenerateUniquePatchPanelId
path: /api/hooks/system/generateuniquepatchpanelid
---

# GenerateUniquePatchPanelId

> **Hook ID:** `greg.SYSTEM.GenerateUniquePatchPanelId`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PatchPanel.GenerateUniquePatchPanelId

## Native Signature
```csharp
Il2Cpp.PatchPanel::GenerateUniquePatchPanelId()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GenerateUniquePatchPanelId` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GenerateUniquePatchPanelId", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GenerateUniquePatchPanelId");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GenerateUniquePatchPanelId", function(payload)
    greg.log("Hook greg.SYSTEM.GenerateUniquePatchPanelId received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GenerateUniquePatchPanelId fired")

greg.on("greg.SYSTEM.GenerateUniquePatchPanelId", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GenerateUniquePatchPanelId", (payload) => {
    console.log("Hook greg.SYSTEM.GenerateUniquePatchPanelId triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GenerateUniquePatchPanelId".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GenerateUniquePatchPanelId", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GenerateUniquePatchPanelId fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
