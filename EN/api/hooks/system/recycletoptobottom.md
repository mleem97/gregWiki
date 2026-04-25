---
title: RecycleTopToBottom
description: Documentation for greg.SYSTEM.RecycleTopToBottom
path: /api/hooks/system/recycletoptobottom
---

# RecycleTopToBottom

> **Hook ID:** `greg.SYSTEM.RecycleTopToBottom`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/VerticalRecyclingSystem.RecycleTopToBottom

## Native Signature
```csharp
Il2Cpp.VerticalRecyclingSystem::RecycleTopToBottom()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RecycleTopToBottom` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RecycleTopToBottom", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RecycleTopToBottom");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RecycleTopToBottom", function(payload)
    greg.log("Hook greg.SYSTEM.RecycleTopToBottom received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RecycleTopToBottom fired")

greg.on("greg.SYSTEM.RecycleTopToBottom", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RecycleTopToBottom", (payload) => {
    console.log("Hook greg.SYSTEM.RecycleTopToBottom triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RecycleTopToBottom".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RecycleTopToBottom", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RecycleTopToBottom fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
