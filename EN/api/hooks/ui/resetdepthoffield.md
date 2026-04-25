---
title: ResetDepthOfField
description: Documentation for greg.UI.ResetDepthOfField
path: /api/hooks/ui/resetdepthoffield
---

# ResetDepthOfField

> **Hook ID:** `greg.UI.ResetDepthOfField`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.ResetDepthOfField

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::ResetDepthOfField()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetDepthOfField` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ResetDepthOfField", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ResetDepthOfField");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ResetDepthOfField", function(payload)
    greg.log("Hook greg.UI.ResetDepthOfField received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ResetDepthOfField fired")

greg.on("greg.UI.ResetDepthOfField", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ResetDepthOfField", (payload) => {
    console.log("Hook greg.UI.ResetDepthOfField triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ResetDepthOfField".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ResetDepthOfField", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ResetDepthOfField fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
