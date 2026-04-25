---
title: OnMouseUp
description: Documentation for greg.SYSTEM.OnMouseUp
path: /api/hooks/system/onmouseup
---

# OnMouseUp

> **Hook ID:** `greg.SYSTEM.OnMouseUp`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Receiver.OnMouseUp

## Native Signature
```csharp
Il2Cpp.OSK_Receiver::OnMouseUp()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnMouseUp` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnMouseUp", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnMouseUp");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnMouseUp", function(payload)
    greg.log("Hook greg.SYSTEM.OnMouseUp received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnMouseUp fired")

greg.on("greg.SYSTEM.OnMouseUp", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnMouseUp", (payload) => {
    console.log("Hook greg.SYSTEM.OnMouseUp triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnMouseUp".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnMouseUp", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnMouseUp fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
