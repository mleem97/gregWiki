---
title: ShiftHue
description: Documentation for greg.SYSTEM.ShiftHue
path: /api/hooks/system/shifthue
---

# ShiftHue

> **Hook ID:** `greg.SYSTEM.ShiftHue`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.ShiftHue

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::ShiftHue(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShiftHue` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShiftHue", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShiftHue");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShiftHue", function(payload)
    greg.log("Hook greg.SYSTEM.ShiftHue received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShiftHue fired")

greg.on("greg.SYSTEM.ShiftHue", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShiftHue", (payload) => {
    console.log("Hook greg.SYSTEM.ShiftHue triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShiftHue".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShiftHue", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShiftHue fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
