---
title: AsSectionTitleSet
description: Documentation for greg.UI.AsSectionTitleSet
path: /api/hooks/ui/assectiontitleset
---

# AsSectionTitleSet

> **Hook ID:** `greg.UI.AsSectionTitleSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheetRow.SetAsSectionTitle

## Native Signature
```csharp
Il2Cpp.BalanceSheetRow::SetAsSectionTitle(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AsSectionTitleSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AsSectionTitleSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AsSectionTitleSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AsSectionTitleSet", function(payload)
    greg.log("Hook greg.UI.AsSectionTitleSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AsSectionTitleSet fired")

greg.on("greg.UI.AsSectionTitleSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AsSectionTitleSet", (payload) => {
    console.log("Hook greg.UI.AsSectionTitleSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AsSectionTitleSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AsSectionTitleSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AsSectionTitleSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
