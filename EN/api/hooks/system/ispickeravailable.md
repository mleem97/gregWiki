---
title: IsPickerAvailable
description: Documentation for greg.SYSTEM.IsPickerAvailable
path: /api/hooks/system/ispickeravailable
---

# IsPickerAvailable

> **Hook ID:** `greg.SYSTEM.IsPickerAvailable`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.IsPickerAvailable

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::IsPickerAvailable(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsPickerAvailable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsPickerAvailable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsPickerAvailable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsPickerAvailable", function(payload)
    greg.log("Hook greg.SYSTEM.IsPickerAvailable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsPickerAvailable fired")

greg.on("greg.SYSTEM.IsPickerAvailable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsPickerAvailable", (payload) => {
    console.log("Hook greg.SYSTEM.IsPickerAvailable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsPickerAvailable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsPickerAvailable", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsPickerAvailable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
