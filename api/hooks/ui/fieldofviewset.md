---
title: FieldOfViewSet
description: Documentation for greg.UI.FieldOfViewSet
path: /api/hooks/ui/fieldofviewset
---

# FieldOfViewSet

> **Hook ID:** `greg.UI.FieldOfViewSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetFieldOfView

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetFieldOfView(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FieldOfViewSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.FieldOfViewSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.FieldOfViewSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.FieldOfViewSet", function(payload)
    greg.log("Hook greg.UI.FieldOfViewSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.FieldOfViewSet fired")

greg.on("greg.UI.FieldOfViewSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.FieldOfViewSet", (payload) => {
    console.log("Hook greg.UI.FieldOfViewSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.FieldOfViewSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.FieldOfViewSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.FieldOfViewSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
