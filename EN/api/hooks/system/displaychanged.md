---
title: DisplayChanged
description: Documentation for greg.SYSTEM.DisplayChanged
path: /api/hooks/system/displaychanged
---

# DisplayChanged

> **Hook ID:** `greg.SYSTEM.DisplayChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopCartItem.UpdateDisplay

## Native Signature
```csharp
Il2Cpp.ShopCartItem::UpdateDisplay()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisplayChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DisplayChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DisplayChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DisplayChanged", function(payload)
    greg.log("Hook greg.SYSTEM.DisplayChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DisplayChanged fired")

greg.on("greg.SYSTEM.DisplayChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DisplayChanged", (payload) => {
    console.log("Hook greg.SYSTEM.DisplayChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DisplayChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DisplayChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DisplayChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
