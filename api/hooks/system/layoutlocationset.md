---
title: LayoutLocationSet
description: Documentation for greg.SYSTEM.LayoutLocationSet
path: /api/hooks/system/layoutlocationset
---

# LayoutLocationSet

> **Hook ID:** `greg.SYSTEM.LayoutLocationSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.SetLayoutLocation

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::SetLayoutLocation(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LayoutLocationSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LayoutLocationSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LayoutLocationSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LayoutLocationSet", function(payload)
    greg.log("Hook greg.SYSTEM.LayoutLocationSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LayoutLocationSet fired")

greg.on("greg.SYSTEM.LayoutLocationSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LayoutLocationSet", (payload) => {
    console.log("Hook greg.SYSTEM.LayoutLocationSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LayoutLocationSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LayoutLocationSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LayoutLocationSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
