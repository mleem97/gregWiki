---
title: IsHorizontal
description: Documentation for greg.SYSTEM.IsHorizontal
path: /api/hooks/system/ishorizontal
---

# IsHorizontal

> **Hook ID:** `greg.SYSTEM.IsHorizontal`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.IsHorizontal

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::IsHorizontal(FlexibleColorPicker.Picker)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsHorizontal` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsHorizontal", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsHorizontal");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsHorizontal", function(payload)
    greg.log("Hook greg.SYSTEM.IsHorizontal received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsHorizontal fired")

greg.on("greg.SYSTEM.IsHorizontal", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsHorizontal", (payload) => {
    console.log("Hook greg.SYSTEM.IsHorizontal triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsHorizontal".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsHorizontal", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsHorizontal fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
