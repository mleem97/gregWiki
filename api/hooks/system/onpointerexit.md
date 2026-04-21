---
title: OnPointerExit
description: Documentation for greg.SYSTEM.OnPointerExit
path: /api/hooks/system/onpointerexit
---

# OnPointerExit

> **Hook ID:** `greg.SYSTEM.OnPointerExit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/ButtonExtended.OnPointerExit

## Native Signature
```csharp
Il2Cpp.ButtonExtended::OnPointerExit(PointerEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPointerExit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnPointerExit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnPointerExit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnPointerExit", function(payload)
    greg.log("Hook greg.SYSTEM.OnPointerExit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnPointerExit fired")

greg.on("greg.SYSTEM.OnPointerExit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnPointerExit", (payload) => {
    console.log("Hook greg.SYSTEM.OnPointerExit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnPointerExit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnPointerExit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnPointerExit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
