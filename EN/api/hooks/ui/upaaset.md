---
title: upAASet
description: Documentation for greg.UI.upAASet
path: /api/hooks/ui/upaaset
---

# upAASet

> **Hook ID:** `greg.UI.upAASet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetupAA

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetupAA()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `upAASet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.upAASet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.upAASet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.upAASet", function(payload)
    greg.log("Hook greg.UI.upAASet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.upAASet fired")

greg.on("greg.UI.upAASet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.upAASet", (payload) => {
    console.log("Hook greg.UI.upAASet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.upAASet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.upAASet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.upAASet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
