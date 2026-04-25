---
title: ColorsSet
description: Documentation for greg.SYSTEM.ColorsSet
path: /api/hooks/system/colorsset
---

# ColorsSet

> **Hook ID:** `greg.SYSTEM.ColorsSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.SetColors

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::SetColors(Color, Color)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ColorsSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ColorsSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ColorsSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ColorsSet", function(payload)
    greg.log("Hook greg.SYSTEM.ColorsSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ColorsSet fired")

greg.on("greg.SYSTEM.ColorsSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ColorsSet", (payload) => {
    console.log("Hook greg.SYSTEM.ColorsSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ColorsSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ColorsSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ColorsSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
