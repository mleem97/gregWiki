---
title: PrepAssetGroup
description: Documentation for greg.SYSTEM.PrepAssetGroup
path: /api/hooks/system/prepassetgroup
---

# PrepAssetGroup

> **Hook ID:** `greg.SYSTEM.PrepAssetGroup`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.PrepAssetGroup

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::PrepAssetGroup()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PrepAssetGroup` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PrepAssetGroup", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PrepAssetGroup");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PrepAssetGroup", function(payload)
    greg.log("Hook greg.SYSTEM.PrepAssetGroup received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PrepAssetGroup fired")

greg.on("greg.SYSTEM.PrepAssetGroup", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PrepAssetGroup", (payload) => {
    console.log("Hook greg.SYSTEM.PrepAssetGroup triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PrepAssetGroup".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PrepAssetGroup", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PrepAssetGroup fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
