---
title: OnCollisionEnter
description: Documentation for greg.SYSTEM.OnCollisionEnter
path: /api/hooks/system/oncollisionenter
---

# OnCollisionEnter

> **Hook ID:** `greg.SYSTEM.OnCollisionEnter`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.OnCollisionEnter

## Native Signature
```csharp
Il2Cpp.CarController::OnCollisionEnter(Collision)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnCollisionEnter` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnCollisionEnter", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnCollisionEnter");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnCollisionEnter", function(payload)
    greg.log("Hook greg.SYSTEM.OnCollisionEnter received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnCollisionEnter fired")

greg.on("greg.SYSTEM.OnCollisionEnter", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnCollisionEnter", (payload) => {
    console.log("Hook greg.SYSTEM.OnCollisionEnter triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnCollisionEnter".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnCollisionEnter", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnCollisionEnter fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
