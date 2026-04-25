---
title: OnRemoveClicked
description: Documentation for greg.SYSTEM.OnRemoveClicked
path: /api/hooks/system/onremoveclicked
---

# OnRemoveClicked

> **Hook ID:** `greg.SYSTEM.OnRemoveClicked`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopCartItem.OnRemoveClicked

## Native Signature
```csharp
Il2Cpp.ShopCartItem::OnRemoveClicked()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnRemoveClicked` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnRemoveClicked", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnRemoveClicked");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnRemoveClicked", function(payload)
    greg.log("Hook greg.SYSTEM.OnRemoveClicked received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnRemoveClicked fired")

greg.on("greg.SYSTEM.OnRemoveClicked", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnRemoveClicked", (payload) => {
    console.log("Hook greg.SYSTEM.OnRemoveClicked triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnRemoveClicked".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnRemoveClicked", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnRemoveClicked fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
