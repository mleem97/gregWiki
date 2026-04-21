---
title: VisualStateChanged
description: Documentation for greg.SYSTEM.VisualStateChanged
path: /api/hooks/system/visualstatechanged
---

# VisualStateChanged

> **Hook ID:** `greg.SYSTEM.VisualStateChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopItem.UpdateVisualState

## Native Signature
```csharp
Il2Cpp.ShopItem::UpdateVisualState()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `VisualStateChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.VisualStateChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.VisualStateChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.VisualStateChanged", function(payload)
    greg.log("Hook greg.SYSTEM.VisualStateChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.VisualStateChanged fired")

greg.on("greg.SYSTEM.VisualStateChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.VisualStateChanged", (payload) => {
    console.log("Hook greg.SYSTEM.VisualStateChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.VisualStateChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.VisualStateChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.VisualStateChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
