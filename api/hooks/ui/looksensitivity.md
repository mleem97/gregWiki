---
title: LookSensitivity
description: Documentation for greg.UI.LookSensitivity
path: /api/hooks/ui/looksensitivity
---

# LookSensitivity

> **Hook ID:** `greg.UI.LookSensitivity`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsControls.LookSensitivity

## Native Signature
```csharp
Il2Cpp.SettingsControls::LookSensitivity(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LookSensitivity` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.LookSensitivity", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.LookSensitivity");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.LookSensitivity", function(payload)
    greg.log("Hook greg.UI.LookSensitivity received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.LookSensitivity fired")

greg.on("greg.UI.LookSensitivity", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.LookSensitivity", (payload) => {
    console.log("Hook greg.UI.LookSensitivity triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.LookSensitivity".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.LookSensitivity", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.LookSensitivity fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
