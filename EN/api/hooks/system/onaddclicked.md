---
title: OnAddClicked
description: Documentation for greg.SYSTEM.OnAddClicked
path: /api/hooks/system/onaddclicked
---

# OnAddClicked

> **Hook ID:** `greg.SYSTEM.OnAddClicked`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopCartItem.OnAddClicked

## Native Signature
```csharp
Il2Cpp.ShopCartItem::OnAddClicked()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnAddClicked` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnAddClicked", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnAddClicked");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnAddClicked", function(payload)
    greg.log("Hook greg.SYSTEM.OnAddClicked received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnAddClicked fired")

greg.on("greg.SYSTEM.OnAddClicked", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnAddClicked", (payload) => {
    console.log("Hook greg.SYSTEM.OnAddClicked triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnAddClicked".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnAddClicked", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnAddClicked fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
