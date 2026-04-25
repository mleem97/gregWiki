---
title: GetOrCreateRecord
description: Documentation for greg.UI.GetOrCreateRecord
path: /api/hooks/ui/getorcreaterecord
---

# GetOrCreateRecord

> **Hook ID:** `greg.UI.GetOrCreateRecord`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.GetOrCreateRecord

## Native Signature
```csharp
Il2Cpp.BalanceSheet::GetOrCreateRecord(CustomerItem)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetOrCreateRecord` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.GetOrCreateRecord", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.GetOrCreateRecord");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.GetOrCreateRecord", function(payload)
    greg.log("Hook greg.UI.GetOrCreateRecord received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.GetOrCreateRecord fired")

greg.on("greg.UI.GetOrCreateRecord", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.GetOrCreateRecord", (payload) => {
    console.log("Hook greg.UI.GetOrCreateRecord triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.GetOrCreateRecord".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.GetOrCreateRecord", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.GetOrCreateRecord fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
