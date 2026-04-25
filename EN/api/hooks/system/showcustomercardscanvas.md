---
title: ShowCustomerCardsCanvas
description: Documentation for greg.SYSTEM.ShowCustomerCardsCanvas
path: /api/hooks/system/showcustomercardscanvas
---

# ShowCustomerCardsCanvas

> **Hook ID:** `greg.SYSTEM.ShowCustomerCardsCanvas`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ShowCustomerCardsCanvas

## Native Signature
```csharp
Il2Cpp.MainGameManager::ShowCustomerCardsCanvas(CustomerBaseDoor)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowCustomerCardsCanvas` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShowCustomerCardsCanvas", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShowCustomerCardsCanvas");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShowCustomerCardsCanvas", function(payload)
    greg.log("Hook greg.SYSTEM.ShowCustomerCardsCanvas received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShowCustomerCardsCanvas fired")

greg.on("greg.SYSTEM.ShowCustomerCardsCanvas", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShowCustomerCardsCanvas", (payload) => {
    console.log("Hook greg.SYSTEM.ShowCustomerCardsCanvas triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShowCustomerCardsCanvas".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShowCustomerCardsCanvas", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShowCustomerCardsCanvas fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
