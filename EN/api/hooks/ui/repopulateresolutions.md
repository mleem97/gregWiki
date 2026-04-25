---
title: RepopulateResolutions
description: Documentation for greg.UI.RepopulateResolutions
path: /api/hooks/ui/repopulateresolutions
---

# RepopulateResolutions

> **Hook ID:** `greg.UI.RepopulateResolutions`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.RepopulateResolutions

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::RepopulateResolutions()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RepopulateResolutions` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.RepopulateResolutions", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.RepopulateResolutions");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.RepopulateResolutions", function(payload)
    greg.log("Hook greg.UI.RepopulateResolutions received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.RepopulateResolutions fired")

greg.on("greg.UI.RepopulateResolutions", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.RepopulateResolutions", (payload) => {
    console.log("Hook greg.UI.RepopulateResolutions triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.RepopulateResolutions".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.RepopulateResolutions", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.RepopulateResolutions fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
