---
title: SectionTitleAdded
description: Documentation for greg.UI.SectionTitleAdded
path: /api/hooks/ui/sectiontitleadded
---

# SectionTitleAdded

> **Hook ID:** `greg.UI.SectionTitleAdded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.AddSectionTitle

## Native Signature
```csharp
Il2Cpp.BalanceSheet::AddSectionTitle(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SectionTitleAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.SectionTitleAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.SectionTitleAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.SectionTitleAdded", function(payload)
    greg.log("Hook greg.UI.SectionTitleAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.SectionTitleAdded fired")

greg.on("greg.UI.SectionTitleAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.SectionTitleAdded", (payload) => {
    console.log("Hook greg.UI.SectionTitleAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.SectionTitleAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.SectionTitleAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.SectionTitleAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
