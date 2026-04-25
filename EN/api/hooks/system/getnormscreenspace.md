---
title: GetNormScreenSpace
description: Documentation for greg.SYSTEM.GetNormScreenSpace
path: /api/hooks/system/getnormscreenspace
---

# GetNormScreenSpace

> **Hook ID:** `greg.SYSTEM.GetNormScreenSpace`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.GetNormScreenSpace

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::GetNormScreenSpace(RectTransform, BaseEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetNormScreenSpace` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetNormScreenSpace", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetNormScreenSpace");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetNormScreenSpace", function(payload)
    greg.log("Hook greg.SYSTEM.GetNormScreenSpace received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetNormScreenSpace fired")

greg.on("greg.SYSTEM.GetNormScreenSpace", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetNormScreenSpace", (payload) => {
    console.log("Hook greg.SYSTEM.GetNormScreenSpace triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetNormScreenSpace".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetNormScreenSpace", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetNormScreenSpace fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
