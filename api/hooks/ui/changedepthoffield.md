---
title: ChangeDepthOfField
description: Documentation for greg.UI.ChangeDepthOfField
path: /api/hooks/ui/changedepthoffield
---

# ChangeDepthOfField

> **Hook ID:** `greg.UI.ChangeDepthOfField`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.ChangeDepthOfField

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::ChangeDepthOfField(float, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ChangeDepthOfField` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ChangeDepthOfField", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ChangeDepthOfField");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ChangeDepthOfField", function(payload)
    greg.log("Hook greg.UI.ChangeDepthOfField received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ChangeDepthOfField fired")

greg.on("greg.UI.ChangeDepthOfField", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ChangeDepthOfField", (payload) => {
    console.log("Hook greg.UI.ChangeDepthOfField triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ChangeDepthOfField".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ChangeDepthOfField", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ChangeDepthOfField fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
