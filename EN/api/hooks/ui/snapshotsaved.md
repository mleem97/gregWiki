---
title: SnapshotSaved
description: Documentation for greg.UI.SnapshotSaved
path: /api/hooks/ui/snapshotsaved
---

# SnapshotSaved

> **Hook ID:** `greg.UI.SnapshotSaved`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.SaveSnapshot

## Native Signature
```csharp
Il2Cpp.BalanceSheet::SaveSnapshot(int, Il2CppSystem.DateTime)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SnapshotSaved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.SnapshotSaved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.SnapshotSaved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.SnapshotSaved", function(payload)
    greg.log("Hook greg.UI.SnapshotSaved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.SnapshotSaved fired")

greg.on("greg.UI.SnapshotSaved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.SnapshotSaved", (payload) => {
    console.log("Hook greg.UI.SnapshotSaved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.SnapshotSaved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.SnapshotSaved", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.SnapshotSaved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
