---
title: ButtonCustomerChosen
description: Documentation for greg.SYSTEM.ButtonCustomerChosen
path: /api/hooks/system/buttoncustomerchosen
---

# ButtonCustomerChosen

> **Hook ID:** `greg.SYSTEM.ButtonCustomerChosen`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ButtonCustomerChosen

## Native Signature
```csharp
Il2Cpp.MainGameManager::ButtonCustomerChosen(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonCustomerChosen` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonCustomerChosen", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonCustomerChosen");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonCustomerChosen", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonCustomerChosen received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonCustomerChosen fired")

greg.on("greg.SYSTEM.ButtonCustomerChosen", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonCustomerChosen", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonCustomerChosen triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonCustomerChosen".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonCustomerChosen", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonCustomerChosen fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
