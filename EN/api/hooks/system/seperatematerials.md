---
title: SeperateMaterials
description: Documentation for greg.SYSTEM.SeperateMaterials
path: /api/hooks/system/seperatematerials
---

# SeperateMaterials

> **Hook ID:** `greg.SYSTEM.SeperateMaterials`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.SeperateMaterials

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::SeperateMaterials()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SeperateMaterials` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SeperateMaterials", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SeperateMaterials");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SeperateMaterials", function(payload)
    greg.log("Hook greg.SYSTEM.SeperateMaterials received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SeperateMaterials fired")

greg.on("greg.SYSTEM.SeperateMaterials", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SeperateMaterials", (payload) => {
    console.log("Hook greg.SYSTEM.SeperateMaterials triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SeperateMaterials".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SeperateMaterials", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SeperateMaterials fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
