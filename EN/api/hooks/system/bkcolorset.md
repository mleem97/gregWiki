---
title: BkColorSet
description: Documentation for greg.SYSTEM.BkColorSet
path: /api/hooks/system/bkcolorset
---

# BkColorSet

> **Hook ID:** `greg.SYSTEM.BkColorSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.SetBkColor

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::SetBkColor(Color, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BkColorSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BkColorSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BkColorSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BkColorSet", function(payload)
    greg.log("Hook greg.SYSTEM.BkColorSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BkColorSet fired")

greg.on("greg.SYSTEM.BkColorSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BkColorSet", (payload) => {
    console.log("Hook greg.SYSTEM.BkColorSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BkColorSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BkColorSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BkColorSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
