---
title: InvertY
description: Documentation for greg.UI.InvertY
path: /api/hooks/ui/inverty
---

# InvertY

> **Hook ID:** `greg.UI.InvertY`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsControls.InvertY

## Native Signature
```csharp
Il2Cpp.SettingsControls::InvertY()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InvertY` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.InvertY", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.InvertY");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.InvertY", function(payload)
    greg.log("Hook greg.UI.InvertY received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.InvertY fired")

greg.on("greg.UI.InvertY", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.InvertY", (payload) => {
    console.log("Hook greg.UI.InvertY triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.InvertY".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.InvertY", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.InvertY fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
