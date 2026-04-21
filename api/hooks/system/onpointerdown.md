---
title: OnPointerDown
description: Documentation for greg.SYSTEM.OnPointerDown
path: /api/hooks/system/onpointerdown
---

# OnPointerDown

> **Hook ID:** `greg.SYSTEM.OnPointerDown`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.OnPointerDown

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::OnPointerDown(PointerEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPointerDown` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnPointerDown", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnPointerDown");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnPointerDown", function(payload)
    greg.log("Hook greg.SYSTEM.OnPointerDown received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnPointerDown fired")

greg.on("greg.SYSTEM.OnPointerDown", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnPointerDown", (payload) => {
    console.log("Hook greg.SYSTEM.OnPointerDown triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnPointerDown".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnPointerDown", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnPointerDown fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
