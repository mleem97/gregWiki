---
title: ColorSet
description: Documentation for greg.SYSTEM.ColorSet
path: /api/hooks/system/colorset
---

# ColorSet

> **Hook ID:** `greg.SYSTEM.ColorSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.SetColor

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::SetColor(Color)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ColorSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ColorSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ColorSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ColorSet", function(payload)
    greg.log("Hook greg.SYSTEM.ColorSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ColorSet fired")

greg.on("greg.SYSTEM.ColorSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ColorSet", (payload) => {
    console.log("Hook greg.SYSTEM.ColorSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ColorSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ColorSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ColorSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
