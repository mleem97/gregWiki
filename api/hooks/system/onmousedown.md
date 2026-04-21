---
title: OnMouseDown
description: Documentation for greg.SYSTEM.OnMouseDown
path: /api/hooks/system/onmousedown
---

# OnMouseDown

> **Hook ID:** `greg.SYSTEM.OnMouseDown`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Receiver.OnMouseDown

## Native Signature
```csharp
Il2Cpp.OSK_Receiver::OnMouseDown()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnMouseDown` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnMouseDown", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnMouseDown");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnMouseDown", function(payload)
    greg.log("Hook greg.SYSTEM.OnMouseDown received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnMouseDown fired")

greg.on("greg.SYSTEM.OnMouseDown", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnMouseDown", (payload) => {
    console.log("Hook greg.SYSTEM.OnMouseDown triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnMouseDown".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnMouseDown", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnMouseDown fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
