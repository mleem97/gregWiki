---
title: GetColor
description: Documentation for greg.SYSTEM.GetColor
path: /api/hooks/system/getcolor
---

# GetColor

> **Hook ID:** `greg.SYSTEM.GetColor`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.GetColor

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::GetColor()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetColor` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetColor", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetColor");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetColor", function(payload)
    greg.log("Hook greg.SYSTEM.GetColor received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetColor fired")

greg.on("greg.SYSTEM.GetColor", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetColor", (payload) => {
    console.log("Hook greg.SYSTEM.GetColor triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetColor".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetColor", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetColor fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
