---
title: RestoreRecord
description: Documentation for greg.UI.RestoreRecord
path: /api/hooks/ui/restorerecord
---

# RestoreRecord

> **Hook ID:** `greg.UI.RestoreRecord`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.RestoreRecord

## Native Signature
```csharp
Il2Cpp.BalanceSheet::RestoreRecord(CustomerRecordSaveData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RestoreRecord` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.RestoreRecord", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.RestoreRecord");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.RestoreRecord", function(payload)
    greg.log("Hook greg.UI.RestoreRecord received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.RestoreRecord fired")

greg.on("greg.UI.RestoreRecord", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.RestoreRecord", (payload) => {
    console.log("Hook greg.UI.RestoreRecord triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.RestoreRecord".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.RestoreRecord", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.RestoreRecord fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
