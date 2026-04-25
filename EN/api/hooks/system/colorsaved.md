---
title: ColorSaved
description: Documentation for greg.SYSTEM.ColorSaved
path: /api/hooks/system/colorsaved
---

# ColorSaved

> **Hook ID:** `greg.SYSTEM.ColorSaved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FCP_Persistence.SaveColor

## Native Signature
```csharp
Il2Cpp.FCP_Persistence::SaveColor(Color)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ColorSaved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ColorSaved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ColorSaved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ColorSaved", function(payload)
    greg.log("Hook greg.SYSTEM.ColorSaved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ColorSaved fired")

greg.on("greg.SYSTEM.ColorSaved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ColorSaved", (payload) => {
    console.log("Hook greg.SYSTEM.ColorSaved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ColorSaved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ColorSaved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ColorSaved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
