---
title: GetLatestSnapshot
description: Documentation for greg.UI.GetLatestSnapshot
path: /api/hooks/ui/getlatestsnapshot
---

# GetLatestSnapshot

> **Hook ID:** `greg.UI.GetLatestSnapshot`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.GetLatestSnapshot

## Native Signature
```csharp
Il2Cpp.BalanceSheet::GetLatestSnapshot()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetLatestSnapshot` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.GetLatestSnapshot", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.GetLatestSnapshot");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.GetLatestSnapshot", function(payload)
    greg.log("Hook greg.UI.GetLatestSnapshot received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.GetLatestSnapshot fired")

greg.on("greg.UI.GetLatestSnapshot", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.GetLatestSnapshot", (payload) => {
    console.log("Hook greg.UI.GetLatestSnapshot triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.GetLatestSnapshot".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.GetLatestSnapshot", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.GetLatestSnapshot fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
