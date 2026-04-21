---
title: ResDropDownSet
description: Documentation for greg.UI.ResDropDownSet
path: /api/hooks/ui/resdropdownset
---

# ResDropDownSet

> **Hook ID:** `greg.UI.ResDropDownSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetResDropDown

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetResDropDown(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResDropDownSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ResDropDownSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ResDropDownSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ResDropDownSet", function(payload)
    greg.log("Hook greg.UI.ResDropDownSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ResDropDownSet fired")

greg.on("greg.UI.ResDropDownSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ResDropDownSet", (payload) => {
    console.log("Hook greg.UI.ResDropDownSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ResDropDownSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ResDropDownSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ResDropDownSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
