---
title: PointerFocusSet
description: Documentation for greg.SYSTEM.PointerFocusSet
path: /api/hooks/system/pointerfocusset
---

# PointerFocusSet

> **Hook ID:** `greg.SYSTEM.PointerFocusSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.SetPointerFocus

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::SetPointerFocus(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PointerFocusSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PointerFocusSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PointerFocusSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PointerFocusSet", function(payload)
    greg.log("Hook greg.SYSTEM.PointerFocusSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PointerFocusSet fired")

greg.on("greg.SYSTEM.PointerFocusSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PointerFocusSet", (payload) => {
    console.log("Hook greg.SYSTEM.PointerFocusSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PointerFocusSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PointerFocusSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PointerFocusSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
