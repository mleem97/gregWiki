---
title: OnLanguageDropDownChange
description: Documentation for greg.UI.OnLanguageDropDownChange
path: /api/hooks/ui/onlanguagedropdownchange
---

# OnLanguageDropDownChange

> **Hook ID:** `greg.UI.OnLanguageDropDownChange`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGameplay.OnLanguageDropDownChange

## Native Signature
```csharp
Il2Cpp.SettingsGameplay::OnLanguageDropDownChange(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLanguageDropDownChange` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnLanguageDropDownChange", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnLanguageDropDownChange");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnLanguageDropDownChange", function(payload)
    greg.log("Hook greg.UI.OnLanguageDropDownChange received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnLanguageDropDownChange fired")

greg.on("greg.UI.OnLanguageDropDownChange", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnLanguageDropDownChange", (payload) => {
    console.log("Hook greg.UI.OnLanguageDropDownChange triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnLanguageDropDownChange".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnLanguageDropDownChange", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnLanguageDropDownChange fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
