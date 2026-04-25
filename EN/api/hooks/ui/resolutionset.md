---
title: ResolutionSet
description: Documentation for greg.UI.ResolutionSet
path: /api/hooks/ui/resolutionset
---

# ResolutionSet

> **Hook ID:** `greg.UI.ResolutionSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetResolution

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetResolution(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResolutionSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ResolutionSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ResolutionSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ResolutionSet", function(payload)
    greg.log("Hook greg.UI.ResolutionSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ResolutionSet fired")

greg.on("greg.UI.ResolutionSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ResolutionSet", (payload) => {
    console.log("Hook greg.UI.ResolutionSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ResolutionSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ResolutionSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ResolutionSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
