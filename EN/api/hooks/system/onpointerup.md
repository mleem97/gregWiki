---
title: OnPointerUp
description: Documentation for greg.SYSTEM.OnPointerUp
path: /api/hooks/system/onpointerup
---

# OnPointerUp

> **Hook ID:** `greg.SYSTEM.OnPointerUp`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.OnPointerUp

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::OnPointerUp(PointerEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPointerUp` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnPointerUp", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnPointerUp");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnPointerUp", function(payload)
    greg.log("Hook greg.SYSTEM.OnPointerUp received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnPointerUp fired")

greg.on("greg.SYSTEM.OnPointerUp", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnPointerUp", (payload) => {
    console.log("Hook greg.SYSTEM.OnPointerUp triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnPointerUp".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnPointerUp", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnPointerUp fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
