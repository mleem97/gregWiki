---
title: StaticChanged
description: Documentation for greg.SYSTEM.StaticChanged
path: /api/hooks/system/staticchanged
---

# StaticChanged

> **Hook ID:** `greg.SYSTEM.StaticChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.UpdateStatic

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::UpdateStatic(FlexibleColorPicker.PickerType)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StaticChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.StaticChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.StaticChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.StaticChanged", function(payload)
    greg.log("Hook greg.SYSTEM.StaticChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.StaticChanged fired")

greg.on("greg.SYSTEM.StaticChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.StaticChanged", (payload) => {
    console.log("Hook greg.SYSTEM.StaticChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.StaticChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.StaticChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.StaticChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
