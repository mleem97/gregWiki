---
title: RefreshRateSet
description: Documentation for greg.UI.RefreshRateSet
path: /api/hooks/ui/refreshrateset
---

# RefreshRateSet

> **Hook ID:** `greg.UI.RefreshRateSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetRefreshRate

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetRefreshRate(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RefreshRateSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.RefreshRateSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.RefreshRateSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.RefreshRateSet", function(payload)
    greg.log("Hook greg.UI.RefreshRateSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.RefreshRateSet fired")

greg.on("greg.UI.RefreshRateSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.RefreshRateSet", (payload) => {
    console.log("Hook greg.UI.RefreshRateSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.RefreshRateSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.RefreshRateSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.RefreshRateSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
