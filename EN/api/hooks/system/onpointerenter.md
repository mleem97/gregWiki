---
title: OnPointerEnter
description: Documentation for greg.SYSTEM.OnPointerEnter
path: /api/hooks/system/onpointerenter
---

# OnPointerEnter

> **Hook ID:** `greg.SYSTEM.OnPointerEnter`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/ButtonExtended.OnPointerEnter

## Native Signature
```csharp
Il2Cpp.ButtonExtended::OnPointerEnter(PointerEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPointerEnter` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnPointerEnter", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnPointerEnter");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnPointerEnter", function(payload)
    greg.log("Hook greg.SYSTEM.OnPointerEnter received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnPointerEnter fired")

greg.on("greg.SYSTEM.OnPointerEnter", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnPointerEnter", (payload) => {
    console.log("Hook greg.SYSTEM.OnPointerEnter triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnPointerEnter".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnPointerEnter", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnPointerEnter fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
