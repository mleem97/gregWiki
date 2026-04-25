---
title: UnlockButton
description: Documentation for greg.SYSTEM.UnlockButton
path: /api/hooks/system/unlockbutton
---

# UnlockButton

> **Hook ID:** `greg.SYSTEM.UnlockButton`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopItem.UnlockButton

## Native Signature
```csharp
Il2Cpp.ShopItem::UnlockButton()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UnlockButton` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.UnlockButton", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.UnlockButton");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.UnlockButton", function(payload)
    greg.log("Hook greg.SYSTEM.UnlockButton received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.UnlockButton fired")

greg.on("greg.SYSTEM.UnlockButton", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.UnlockButton", (payload) => {
    console.log("Hook greg.SYSTEM.UnlockButton triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.UnlockButton".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.UnlockButton", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.UnlockButton fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
